import {connect} from 'react-redux';
import {fetchUsers} from './Action'
import { useEffect } from 'react';

function UserDisplay ({getusers,userData})
{
    useEffect(()=>{
        getusers()
    },[]);
    return userData.loading?(
        <h3>Loading...</h3>
    ):userData.error?(
        <h3>{userData.error}</h3>
    ):(
        <div>
            
            <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
<tbody>
                {
                userData && userData.users && userData.users
                .map(user=><tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                  </tr>
                  
                  )}
                  </tbody>
</table>
            </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        userData:state.user
    }
}
const mapDispatchToProps= dispatch =>{
    return{
       getusers:()=>dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(UserDisplay);