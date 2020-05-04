import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout';
import UserList from '../../components/UserList';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {FirebaseConfig} from '../../utils/FirebaseConfig';
const firebase = FirebaseConfig();

class alluserspage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fullname: "",
            users:[],
            selectedUser:null
        };
    }


    componentDidMount(){
        const userData = firebase.firestore().collection('users').where("email", "==", "cynthia.shueanne@gmail.com").limit(1).get();
        // console.log('userData: ', userData);
        // var theUserData = {};
        var selectedUser = null;
        // var selectedUser = {};
        userData.then((querySnapshot)=>{
        querySnapshot.forEach(doc=>{
            console.log(doc.id, '=>', doc.data());
            // theUserData.push(doc.data());
            // selectedUser[doc.id] = doc.data()
            selectedUser = doc.data();
            selectedUser.id = doc.id;
        });
            this.setState({selectedUser:selectedUser});
        }).catch(function (error) {
            this.setState({ selectedUser: null});
            console.log("Error getting document:", error);
        });

        var users = [];
        firebase.firestore().collection("users").limit(10).onSnapshot(querySnapshot => {
        // var users = {};
        // var users = [];
            querySnapshot.forEach(doc=>{
                // users[doc.id] = doc.data();
                users.push(doc.data());
            });
            this.setState({users});
        });
    }

    handleChange = name => event => {
        const value = event.target.value;
        const {selectedUser} = this.state;
        console.log('value: ', value);
        selectedUser[name] = value;
        console.log('selectedUser:', selectedUser);
        this.setState({selectedUser:selectedUser});
    }

    renderViewUsers(){

        const {users} = this.state;

        // var userDataLayout = [];
        // if (users.length>0){
        //     users && users.forEach((user, id)=>{
        //         //console.log('useremail: ', user.email);
        //         // userDataLayout.push(<p>{user.email}</p>)
        //         userDataLayout.push(<p key={id}>{user.name}</p>)
        //     });
        // }

        return (
            <div>
                <h1>view 10 users</h1>
                {false && userDataLayout}
                <userList usersdata={users}/>
            </div>
             
          )
    }

    handleSaveEdit(){
        const {selectedUser} = this.state;
        console.log('handleSaveEditUser: ', selectedUser);
        var selectedUserRef = firebase.firestore().collection("users").doc(selectedUser.id);
        selectedUserRef.update({
            ...selectedUser})
            .then(function() {
                console.log('successfully updated!')
            }).catch(e=>{
                console.log('error')
            })
    }

    handleAddPackage(){
        const packageData = {
            type:'membership',
            test:'true',
            name:'test'
        }
        firebase.firestore().collection("packages").add(packageData)
        .then(function(docRef) {
            console.log("packages written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    renderSelectedUser(){
        const {selectedUser} = this.state;
        console.log('renderSelectedUser: ', selectedUser);
        if (selectedUser){
            return (
                <div>
                    <h2>{selectedUser.email}</h2>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Name"
                        defaultValue={selectedUser.name}
                        required
                        fullWidth
                        onChange={this.handleChange('name')}
                    />
                     <Button key={'saveEdit'} onClick={()=>this.handleSaveEdit()}>
                        {'Save'}
                    </Button>

                    <p>{selectedUser.name}</p>
                </div>
                 
            )
        }
    }

    renderAddPackage(){
        return(
            <Button key={'addPackage'} onClick={this.handleAddPackage}> {'Add package'}</Button>
        )
    }

    render(){
        // console.log('users: ', this.state.users);
        console.log('theState: ', this.state);
        const {selectedUser, users} = this.state;

        return (
            <Layout>
              <Head>
                <title>test</title>
              </Head>
              {false && this.renderViewUsers()}
              <UserList usersdata={this.state.users}/>
              {this.renderSelectedUser()}
                {this.renderAddPackage()}
              <h2>
                <Link href="/">
                  <a>Back to home</a>
                </Link>
              </h2>
            </Layout>
          )
    }
 
}

export default alluserspage;