import React from "react";
import io from 'socket.io-client';
import {withRouter} from 'react-router-dom';


class ChatBox extends React.Component{
    
    constructor(props){
        super(props)
        // console.log(props)
        this.state={
            chat:[],
            chat_input:'',
            username:'Guilherme'
        }
        this.socket = io(process.env.REACT_APP_BACKEND_WS);
        console.log(this.socket)
    }

    componentDidMount = async()=>{
        const { RTCPeerConnection, RTCSessionDescription } = window;
        // Free public STUN servers provided by Google.
        const iceServers = {
            iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            { urls: 'stun:stun2.l.google.com:19302' },
            { urls: 'stun:stun3.l.google.com:19302' },
            { urls: 'stun:stun4.l.google.com:19302' },
            ],
        }

        let caller = new RTCPeerConnection(iceServers);    
        console.log(caller)
        let offer = await caller.createOffer()
        await caller.setLocalDescription(new RTCSessionDescription(offer))
        this.socket.emit("event://join-call", offer)

        this.socket.on("event://send-message",(msg)=>{
            console.log(msg)
            let local_msgs = this.state.chat
            local_msgs.push({username:msg.username, text:msg.message})

            this.setState({chat:local_msgs})            
        } )

        this.socket.on("event://new-user",async (data)=>{
            await caller.setRemoteDescription(new RTCSessionDescription(data.offer))
            alert(data.username)
        } )
    }
    

    renderMessages = ()=>{
        let messages = this.state.chat.map((m)=>{
            return(<li>
                <span>{m.username}</span>
                <p>{m.text}</p>
            </li>)
        })

        return (<ul>
            {messages}
        </ul>)
    }
    sendMessage = (e) =>{
        e.preventDefault()
        let messages = this.state.chat
        messages.push({username:this.state.username, text: this.state.chat_input})
        this.setState({chat_input:'',chat: messages})
    }

    render(){
        return (
                <div className="chat-container">
                    <h1>Chat</h1>
                    {this.renderMessages()}
                    <form className='chat-form'>
                        <input type='text' className='chat-text-input' value={this.state.chat_input} onChange={(e)=>{this.setState({chat_input:e.target.value})}}></input>
                        <button onClick={this.sendMessage}>Enviar</button>
                    </form>
                </div>
        );
    }
}

export default withRouter(class Call extends React.Component {
    constructor(props){
        super(props)

        // console.log(props)
        this.state={
            id: props.match.params.id,
            videos:[], 
            chat:[],
           
            username:''
        }
    }
    componentDidMount = ()=>{
        const caller = new window.RTCPeerConnection()
        navigator.getUserMedia(
            { video: true, audio: true },
            stream => {
              let vid = this.state.videos
              vid.push({id:4321,stream, local:true})
              this.setState({videos:vid})
              
              stream.getTracks().forEach(track => caller.addTrack(track));
              caller.setLocalDescription(caller.createOffer())

            },
            error => {
              console.warn(error.message);
            }
           );
        caller.ontrack =({streams: [stream]})=>{
            const remoteVideo = document.getElementById("remote-video");
            if (remoteVideo) {
            remoteVideo.srcObject = stream;
            }
        }
    }
    componentDidUpdate = ()=>{
        this.state.videos.map((video)=>{
            let videoComp =document.getElementById('video_'+String(video.id))
            if(videoComp){
                videoComp.srcObject = video.stream
            }
            
        })
    }
    renderVideos = ()=>{
        console.log(this.state.videos)
        return this.state.videos.map((video)=>{
            if(video.local){
                return <video autoPlay id={'video_'+String(video.id)} srcObject={video} muted/>
            }
            return <video autoPlay id={'video_'+String(video.id)} srcObject={video}/>
        })
    }
    
    render(){
        return (
            <div className='call-container'>
                <header className='call-header'>
                    Call {this.state.id}
                </header>
                {this.renderVideos()}
                <ChatBox ></ChatBox>
            </div>
        );
    }
  
})
