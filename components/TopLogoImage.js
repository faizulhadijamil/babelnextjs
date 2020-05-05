// import React from 'react';
// class TopLogoImage extends React.Component {
//     render(){
//         return (
//             <div style={{display:'flex', flex:1, flexDirection:'row', justifyContent:'space-around'}}>
//                 <img src="/images/babel-icon-blue.png" alt="logo" style={{width:128, height:128}} />
//             </div>
//         )
//     }
// }

// export default TopLogoImage;
export default function TopLogoImage() {
    return (
        <div style={{display:'flex', flex:1, flexDirection:'row', justifyContent:'space-around'}}>
            <img src="/images/babel-icon-blue.png" alt="logo" style={{width:128, height:128}} />
        </div>
    )
}