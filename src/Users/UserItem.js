import React from 'react'
import propTypes from 'prop-types';
const UserItem = ({user:{avatar_url,login,html_url}})=> {
    // state={
    //     id:'id',
    //     login:"mojombo",
    //     avatar_url:'https://avatars.githubusercontent.com/u/1?v=4',
    //     html_url:'https://github.com/mojombo'
        

    // };
        return (
            <div className="card text-center" >
                <img src={avatar_url} className="rounded-circle mx-auto my-3" style={{width:"60px"}} alt="" />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
    UserItem.propTypes={
        user: propTypes.object.isRequired
    }

export default UserItem
