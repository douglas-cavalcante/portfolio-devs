import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import DevList from "../../components/DevList";
import DevItem from "../../components/DevList/DevItem";
import SubHeader from "../../components/SubHeader";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      devsList: [],
      info: {
        title: "",
        description: "",
      },
    };

    this.listData = [];
  }

  handleChange = (evt) => {
    const text = evt.target.value;
    console.log(text);

    const resultFilter = this.listData.filter((dev) => {
      return dev.name.includes(text);
    });

    this.setState({ devsList: resultFilter });
  };

  async componentDidMount() {
    console.log("componentDidMount");

    const response = await fetch("http://localhost:3333/devs");
   
   // const responseInfo = await fetch("/api/info");

    const data = await response.json();

    //const dataInfo = await responseInfo.json();

    const devsList = data.map((result) => {
      return {
        name: `${result.name.first} ${result.name.last}`,
        photo: result.picture.thumbnail,
        expertise: result.email,
      };
    });

    console.log(devsList)

    this.listData = devsList;

    this.setState({
      isLoading: false,
      devsList,
      info: {
        title: '',
        description: '',
      },
    });
  }

  goToPerfil = (dev) => {
    this.props.history.push("/perfil", { dev });
  };

  render() {
    console.log("render");
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
          title={this.state.info.title}
          description={this.state.info.description}
        />
        {/* Search */}
        <Search onChange={this.handleChange} />
        {/* List */}
        {this.state.isLoading && "Loading.."}
        {!this.state.isLoading && (
          <DevList>
            {this.state.devsList.map((dev) => (
              // <Link
              //   to={{
              //     pathname: "/perfil",
              //     state: { dev },
              //   }}
              // >
              <DevItem
                name={dev.name}
                photo={dev.photo}
                expertise={dev.expertise}
                onSelect={() => this.goToPerfil(dev)}
              />
              // </Link>
            ))}
          </DevList>
        )}
      </>
    );
  }
}

export default Home;
