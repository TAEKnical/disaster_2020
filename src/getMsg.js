import React from "react";
import axios from "axios";
import Message from "./components/Message";

class getMsg extends React.Component {
    state = {
        isLoading: true,
        row: [],
    };

    getMessage = async () => {
        const {
            data: {
                DisasterMsg:{
                    1:{
                        row
                    }
                }
            }
        } = await axios.get("http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=vs4NSdPFhuePI61%2B9%2F5%2BSY%2Bg4TqUWjGdmL9IzK9YWnwG%2F3%2BlG3RQc68pxZZsK2yn2YZL1elsRCEn%2Fs4vx1j0zQ%3D%3D&type=json&pageNo=1&numOfRows=100&flag=Y");
        this.setState({isLoading:false, row})
    }

    componentDidMount() {
        this.getMessage();
    }

    render() {
        const { isLoading, row} = this.state;
        return <div>
            {isLoading ? "Loading..." : row.map(data => {
                return <Message key={data.md101_sn} id={data.md101_sn} msg={data.msg} location={data.location_name} date={data.create_date}/>
            }) }
        </div>;
    }
}

export default getMsg;