import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x79FCe9858Cc2F78af8464c8f678E53fD9d59174b'
)

export default instance;
