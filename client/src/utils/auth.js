export const checkLogin = async ()=>{
    const user = JSON.parse(localStorage.getItem('user'))|| null;

    if(!user){
        alert('please login first');
        window.location.href='/login';
    }
}
