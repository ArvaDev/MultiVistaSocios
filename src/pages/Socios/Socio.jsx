import './Socio.css'
import { FaUser, FaTag } from 'react-icons/fa';
import PieChart from '../../components/UI/pieChart/PieChart'
import { data } from '../../utils/dataEjemplo/data'

export default function Socio() {

    const productos = Object.keys(data.VentaTotalPorUnidad)
    const ventasPorUnidad = productos.map(key => data.VentaTotalPorUnidad[key]);
    
    const preciosTotalesEnElMes = data.ventaDeProductoPrecio;

    console.log(preciosTotalesEnElMes);

    return (
        <div className='SocioClass'>
            <div className='Container'>
                <div className='InformationClassContainer'>
                    <div className='header'>
                        <p><FaTag/> Mi negocio</p>
                        <div className='user'>
                            <FaUser style={{fontSize: "40px"}}/>
                            Nombre del usuario <em>(Socio)</em>
                        </div>
                    </div>
                    <div className='InformacionContainer'>
                        <div className='card'>
                            <p>Productos mas vendidos</p>
                            <div className='Graphic'>
                                <PieChart labels={productos} data={ventasPorUnidad}/>
                            </div>
                        </div>
                        <div className='card'>
                            <p>Ingresos del mes de {data.mesActual}</p>
                            {Object.entries(preciosTotalesEnElMes).map(([prod, valor]) => (
                                <div className='ingresosMes'>
                                    <p>{prod}</p>
                                    <p className='value'>${valor} MX</p>
                                </div>
                            ))}
                        </div>
                        <div className='card'>
                            <p>Productos mas vendidos</p>
                            <div className='Graphic'>
                                <PieChart labels={productos} data={ventasPorUnidad}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}