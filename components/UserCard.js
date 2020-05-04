import React from 'react';
// import './Business.css';

class UserCard extends React.Component {
    
    
    handleViewUserDetail(userdata){
        console.log('handleViewUserDetail: ', userdata);
    }

    render(){
        const {userdata} = this.props;
        // console.log('theprops: ', this.props)
        return(
            <div style = {{ cursor: 'pointer'}} onClick = {()=>this.handleViewUserDetail(userdata)}>
                <p>{userdata.name}</p>
            </div>
        )
    //     return (
    //         <div className="Business">
    //             <div className="image-container">
    //                 <img src={businessObj.imageSrc} alt=''/>
    //             </div>
    //             <h2>{businessObj.name}</h2>
    //             <div className="Business-information">
    //                 <div className="Business-address">
    //                     <p>{businessObj.address}</p>
    //                     <p>{businessObj.city}</p>
    //                     <p>{businessObj.state}</p>
    //                     <p>{businessObj.zipCode}</p>
    //                 </div>
    //                 <div className="Business-reviews">
    //                     <h3>{businessObj.category}</h3>
    //                     <h3 className="rating">{businessObj.rating}</h3>
    //                     <p>{businessObj.reviewCount}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    }
}

export default UserCard;
