import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.aluracursos.com/'>
            <img src="./logo512.png" alt='Facebook' style={{width: "10%"}} />
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src="./logo512.png" alt='twitter' style={{width: "10%"}}/>
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src="./logo512.png" alt='instagram' style={{width: "10%", position: "center"}}/>
        </a>
    </div>
    <img src='/logo512.png' alt='org' style={{width: "10%"}}/>
    <strong>Desarrollado por Angelo</strong>
</footer>
}

export default Footer