import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
//import { getAllUsers } from '../../lib/posts'
import UserList from '../../components/UserList';

import {FirebaseConfig} from '../../utils/FirebaseConfig';
const firebase = FirebaseConfig();

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