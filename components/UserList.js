import React from 'react';
// import './BusinessList.css';
import UserCard from './UserCard';

class UserList extends React.Component {

    render(){
        console.log('usersList: ', this.props.usersdata);
        return(
            <div>
               {
                   this.props.usersdata.map((data)=>{
                        return <UserCard key={data.email} userdata = {data}/>
                   })
               }
            </div>
        )
    }
}

export default UserList;