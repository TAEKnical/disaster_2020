import React from "react";
import axios from "axios";
import Map from "./components/Map";

class getMap extends React.Component{
    state = {
        isLoading: true,
        pharmacys: []
    };

    getData = async() => {
        const {
            data: {
                storeInfos
            }
        } = await axios.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=1");
        this.setState({pharmacys:storeInfos, isLoading:false});
    };

    componentDidMount() {
        this.getData();
    };
    
    render() {
        const {isLoading, pharmacys} = this.state;
        return <div>
            {isLoading ? "Loading..." : pharmacys.map(pharmacy=>{
                return <Map lat={pharmacy.lat} lng={pharmacy.lng} name={pharmacy.name} addr={pharmacy.addr}/>
            })
            }
        </div>
    };
}

export default getMap;