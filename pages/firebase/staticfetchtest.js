import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
//import { getAllUsers } from '../../lib/posts'
import UserList from '../../components/UserList';

const firebase = require('firebase/app');
require('firebase/firestore');

var config = {
  apiKey: "AIzaSyBoucAnhK3TCPMaJ5QrNnLlw7-bCjsjyoo",
    authDomain: "babelasia-37615.firebaseapp.com",
    databaseURL: "https://babelasia-37615.firebaseio.com",
    projectId: "babelasia-37615",
    storageBucket: "babelasia-37615.appspot.com",
    messagingSenderId: "171899057367",
    appId: "1:171899057367:web:853f0f7baadebbda24ec92",
    measurementId: "G-6GSZPHL0NH"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


export default class staticfetchtest extends React.Component {
    static getInitialProps(){
            return firebase.firestore().collection('users').limit(5).get()
        .then(snapshot => {
            let usersdata = [];
            snapshot.forEach((doc)=>{
                usersdata.push({
                    id:doc.id,
                    ...doc.data()
                })
            })
            return {usersdata}
        })
    }

    render(){
        console.log('staticfetchtest: ', this.props);
        const {usersdata} = this.props;
        return(
            <div> 
                <UserList usersdata={usersdata}/>
            </div>
        )
    }
}
// this page is for static props    
// export default function staticfetchtest({ usersdata }) {
//     console.log('usersdata: ', usersdata)
//   return (
//     <div>
//         <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//             <h2 className={utilStyles.headingLg}>Blog</h2>
//             <ul className={utilStyles.list}>
//             {allPostsData.map(({ id, date, title }) => (
//                 <li className={utilStyles.listItem} key={id}>
//                 {title}
//                 <br />
//                 {id}
//                 <br />
//                 {date}
//                 </li>
//             ))}
//             </ul>
//         </section>
//       </div>
//   )
// }

// export async function getStaticProps() {
//     const usersdata = getAllUsers();
//     return {
//       props: {
//         usersdata
//       }
//     }
// }