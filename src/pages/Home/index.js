import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import DevList from "../../components/DevList";
import DevItem from "../../components/DevList/DevItem";
import SubHeader from "../../components/SubHeader";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Home = () => {

  const history = useHistory();

  const [isLoading, setLoading] = useState(true);
  const [devsList, setDevsList] = useState([]);
  const [listData, setListData] = useState([]);

  const handleChange = (evt) => {
    const text = evt.target.value;

    const resultFilter = listData.filter((dev) => {
      const name = dev.name.toLowerCase();
      return name.includes(text.toLowerCase());
    });

    setDevsList(resultFilter);
  };

  const goToPerfil = (dev) => {
    history.push("/perfil", { dev });
  };

  useEffect(() => {
    async function handleGetDevs() {
      try {
        const response = await fetch("http://localhost:3333/devs");
        const data = await response.json();

        setListData(data);
        setDevsList(data);
        setLoading(false);
      } catch (error) {
        alert('Houve um erro ao tentar listar os devs. Entre em contato com suporte.')
      }
    }
    handleGetDevs();
  }, []);

  return (
    <>


      {/* Header */}
      <Header title="DEVS">
        <Link to="/register">
          <button>Criar</button>
        </Link>
      </Header>

      {/* SubHeader */}
      <SubHeader
        title="Home"
        description="Tela de boas vindas"
      />
      {/* Search */}
      <Search onChange={handleChange} />
      {/* List */}
      {isLoading && "Loading.."}
      {!isLoading && (
        <DevList>
          {devsList.map((dev) => (
            <DevItem
              name={dev.name}
              email={dev.email}
              favoriteAnimal={dev.favorite_animal}
              onSelect={() => goToPerfil(dev)}
            />
          ))}
        </DevList>
      )}
    </>
  );
}

export default Home;