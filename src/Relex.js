import './App.css';
import apple from './images/apple.png'
import nexus from './images/nexus.png'
import apps from './images/apps.png'

function Relex() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{ height: 80, backgroundColor: '#1A1A1C', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 16, paddingRight: 16 }}>
                <div style={{ color: '#8C8C8D', fontWeight: 400, fontSize: 18 }}>Contact</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={nexus} style={{ width: 25, marginRight: 10 }}></img>
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: 28 }}>Relex</div>
                </div>
                <a href="relex-1.apk" download={"relex-1.apk"}>
                    <div

                        style={{ display: 'flex', alignItems: 'center' }} onClick={() => {

                        }}>
                        <div class="button" style={{ color: '#8C8C8D', fontWeight: 400, fontSize: 18 }}>Download</div>
                        <img src={apple} style={{ width: 24, marginLeft: 10, marginBottom: 5 }}></img>
                    </div>
                </a>

            </div>




            <div style={{ display: 'flex' }}>
                <div style={{ width: '40%', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 300, height: 300, borderRadius: 40, boxShadow: '0 0 8px 8px #EEEEEE', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                        <img src={nexus} style={{ width: 170 }}></img>
                    </div>
                    <div style={{ fontSize: 80, color: '#262626' }}>Relex</div>
                    <div style={{ color: '#8C8C8D' }}>The simpliest solution to relocation.</div>
                    <div style={{ marginTop: 20, color: '#8C8C8D' }}>Input your trip in the map.</div>
                    <div style={{ color: '#8C8C8D' }}>Add reciepts as you drive.</div>
                    <div style={{ color: '#8C8C8D' }}>Submit at the end!</div>
                </div>
                <div style={{ width: '60%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={apps} style={{ maxHeight: '70vh' }}></img>
                </div>
            </div>
        </div >
    );
}

export default Relex;
