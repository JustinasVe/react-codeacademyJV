export const UserGreeting =  ({ name, onClick123 }) =>  {
    if (name) {
        return <h1 onClick={onClick123}>Welcome back, {name}</h1>;
    }

    return <h1>welcome back!</h1>  
};