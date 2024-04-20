import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import UserCard from "./components/userCard/userCard.jsx";
import {PacmanLoader} from "react-spinners";
import { Swiper, SwiperSlide , useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {

    const swiper = useSwiper();
    // task ekranda bir adet paragraf etiketi olsun
    // başkangıçta içinde adınız : yazsın
    // altında bir buton olsun
    // butona basıldığında yazı adınız : Gülali Çelik olarak değişsin
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    // const [name, setName] = useState('Adınız :');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        console.log('sayfa yüklendi')

        getUsers();


    }, []);

    // dependecy array boş ise sayfa yüklenmesi tamamlandığında sadece bir kere çalışır

    const getUsers = async () => {
        setLoading(true);
            axios.get(`${baseUrl}/users`)
                .then((response) => {
                    setUsers(response.data);
                    console.log(response.data);
                    setLoading(false);
                }).catch((error) => {
                console.log(error);
                setLoading(false);
            });


        // fetch(`${baseUrl}/users`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     }).catch(error => {
        //     console.log(error);
        // });
    }

    // useEffect(() => {
    //     console.log('name değişti')
    // }, [name]);

    // const handleClick = () => {
    //     setName('Adınız : Gülali Çelik')
    // }
    return (
        <>

            {/*<p>{name}</p>*/}
            {/*<button onClick={handleClick}>Adımı yaz</button>*/}
            {/*<button onClick={getUsers}>Kullanıcıları çek</button>*/}
            {loading && <PacmanLoader color={'#00fdd2'} loading={loading} size={50}/>}
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {users.map((user) => (

                    <SwiperSlide> <UserCard user={user} /> </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default App
