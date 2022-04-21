import  '../styles/global.css';
import TodosProvider from '../store/TodosProvider';
import NavBar from '../components/ui/NavBar';

function MyApp ({Component, pageProps})  {
    return (
        <TodosProvider>
            <NavBar/>
            <Component {...pageProps} />
        </TodosProvider>)
}

export default MyApp;