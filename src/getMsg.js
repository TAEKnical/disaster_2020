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
        } = await axios.get("http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=키값&type=json&pageNo=1&numOfRows=100&flag=Y");
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