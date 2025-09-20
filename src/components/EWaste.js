import React from 'react'
import '../css/EWaste.css'
import eWaste from '../assets/e-waste-new.jpg'

const EWaste = () => {

  const collectionCentres = [
    {
      sNo : 1,
      states : "Andhra Pradesh",
      address : "Gati Kintetsu Express Pvt. Ltd.., Plot no. 177, Road no. 32, IDA Jeedimetla, behide TS RTC bus depot, JEE dimetla, Hyderabad500055",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 2,
      states : "Arunachal Pradesh",
      address : "Gati Kintetsu Express Pvt. Ltd., Shiv Mandir Road, Naharlagun, Near RCM Business Center, E- Sector, Itanagar-791110, Arunachal Pradesh",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 3,
      states : "Assam",
      address : "Gati Kintetsu Express Pvt. Ltd., Garchuk Chariali, Dipenpara, Guwahati, Assam-781035",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 4,
      states : "Bihar",
      address : "Gati Kintetsu Express Pvt. Ltd., Karmali Chowk, Opposite Bar & Restaurant, Nearb Didarganj toll Plaza, Patna, Bihar- 800009",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 5,
      states : "Chandigarh",
      address : "Gati Kintetsu Express Pvt. Ltd., 34/1 V.P.O Raipur Kalan, Chandigarh – 160102",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 6,
      states : "Chhattisgarh",
      address : "Gati Kintetsu Express Pvt. Ltd., Sultania Compound, Near Urla Telephone, Raipur H.O, Raipur, Chhattisgarh – 492001",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 7,
      states : "Dadra and Nagar Haveli",
      address : "Gati Kintetsu Express Pvt. Ltd., Survey no 225/3/2 H. no. 88, Zhariamora Dadra, silvassa, Dadra & Nagar Haveli 396193",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 8,
      states : "Daman and Diu",
      address : "Gati Kintetsu Express Pvt. Ltd., Survey no 23/4, opp mohangaon phatak N.H no 8, Tal- Umber gaon Dist- Valsad 396195",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 9,
      states : "Delhi",
      address : "Gati Kintetsu Express Pvt. Ltd., B 19 Okhla industrial area, Phase 1, new delhi 110020",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 10,
      states : "Goa",
      address : "Gati Kintetsu Express Pvt. Ltd., C/o- Group Tenplus, Abreovaddo, Saligao, Bardez, Goa- 403521",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 11,
      states : "Gujarat",
      address : "Gati Kintetsu Express Pvt. Ltd., Plot no. 1 & 2 ashwamegh ind estate, opp changodar bus stand, rajkot highway, ahmedabad 382210",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 12,
      states : "Haryana",
      address : "Gati Kintetsu Express Pvt. Ltd., Killa no 9/2/2, near IFFCO Chowk, near toyota body shop, Gurgaon 122001",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 13,
      states : "Himachal Pradesh",
      address : "Gati Kintetsu Express Pvt. Ltd., Ward No-3, Mehtapur, Near Mehtapur Bus Stand, Una Himachal Pradesh- 174315",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 14,
      states : "Jammu & Kashmir",
      address : "Gati Kintetsu Express Pvt. Ltd., Plot No-64, Gati Kintetsu Express Pvt. Ltd., Purmandal Morh, Shiva Market, Jammu- 180001",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 15,
      states : "Jharkhand",
      address : "Gati Kintetsu Express Pvt. Ltd., Plot No-3, Near Toyta Service Center, Dipa Toli, Ranchi- 834001",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 16,
      states : "Karnataka",
      address : "Gati Kintetsu Express Pvt. Ltd., Plot no 5-C peenya 1st Phase, Peenya industrial area Banglore 560058",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 17,
      states : "Kerala, Lakshadweep",
      address : "Gati Kintetsu Express Pvt. Ltd., Custom Road, Calicut HO, Kozhikode, 673001, Near Tata Indicom Building",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 18,
      states : "Madhya Pradesh",
      address : "Gati Kintetsu Express Pvt. Ltd., C/o- Silo Warehousing, Katangi By Pass, Maharajpur Road, Jabalpur City, Kaphonda, Near Car Honda Office, Behind Pandav Dhaba, Jabalpur- 482002",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 19,
      states : "Maharashtra",
      address : "Gati Kintetsu Express Pvt. Ltd., Survey no.41 Saswad road Badhe Launs Near Sliver Star Hall Hotel, Kondhwa Buruk, Pune 411048",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 20,
      states : "Manipur",
      address : "Gati Kintetsu Express Pvt. Ltd., next to vastu decora main road NH 2 ground floor, mamta saree centre, Imphal 795002",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 21,
      states : "Meghalaya",
      address : "Gati Kintetsu Express Pvt. Ltd., Opp. G.S. Road, East Khasi Hills, Shillong, Meghalaya- 793002",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 22,
      states : "Mizoram",
      address : "Gati Kintetsu Express Pvt. Ltd., Y4 bawngkawn chhimveng, opp directorable of transport, ramlung road, Aizawl 796001",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 23,
      states : "Nagaland",
      address : "Gati Kintetsu Express Pvt. Ltd., City Tower, Circular Road, Near Axis Bank Jakahallu Building, Eastern Mirror, Dimapur- 797112, Nagaland",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 24,
      states : "Odisha",
      address : "Gati Kintetsu Express Pvt. Ltd., Plot No. 500 Nakhara, NH- 5 Opp. Lakheswa, Dist- Khurda, P.S- Balianta, Bhubneshwar 752101",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 25,
      states : "Puducherry",
      address : "Gati Kintetsu Express Pvt. Ltd., Plot No- 111/3, Reddiar Palayam, Thirumalai, Thayar Nagar, Pondicherry-605010",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 26,
      states : "Punjab",
      address : "Gati Kintetsu Express Pvt. Ltd., Plot no.62E, jhaj Garh, pataka market, near VRI Logistics, Amritsar, Punjab 143001",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 27,
      states : "Rajasthan",
      address : "Gati Kintetsu Express Pvt. Ltd., 1070, bhankrot kalan ajmer road, Near Bhanrota Police station, Jaipur 302026",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 28,
      states : "Sikkim",
      address : "Gati Kintetsu Express Pvt. Ltd., Tadong Main Road, Infront of Tadong College, Tadong Gangtok-737102",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 29,
      states : "Tamil Nadu, Andaman & Nicobar Island",
      address : "Gati Kintetsu Express Pvt. Ltd., No. 608 Soundra Pandiyan Nagar, Near Ajan Bustand, Thirvottiyur, chennai 600019",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 30,
      states : "Tripura",
      address : "Gati Kintetsu Express Pvt. Ltd., Pragati Road, Opposite Mehra Kalibari, Krishna Nagar, Agartala, Tripura- 799001",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 31,
      states : "Uttar Pradesh",
      address : "Gati Kintetsu Express Pvt. Ltd., C-14, Gati Kintetsu Express Pvt. Ltd., Transport Nagar, Lucknow-226012,Near Phase-2, Near Parking No:6, Uttar Pradesh",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 32,
      states : "Uttarakhand",
      address : "Gati Kintetsu Express Pvt. Ltd., Khasra no 2353 & 2357, Arcadia Grant Near Mobhewala Industrial Dehradun 248001",
      tollFreeNumber : "1800-102-4919"
    },
    {
      sNo : 33,
      states : "West Bengal",
      address : "Gati Kintetsu Express Pvt. Ltd., Agarpara Jute Mills Ltd. 93F BT Road , Agarpara Jute Mills, Kolkata 700058",
      tollFreeNumber : "1800-102-4919"
    },
  ]

  return (
    <div>
      <section className='eWastePart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>E-Waste Management</strong></h1>
      </section>

      <section className='eWastePart2 container p-4' style={{ textAlign: 'left' }}>
        <div className='row p-4'>
            <div className='col-md-5 p-4'>
              <img src={eWaste} alt='...' style={{ border: '1px solid #F7C427' }} />
            </div>
            <div className='col-md-7 p-4'>
                <h2 className='p-2' style={{ color: "#77221A" }}><strong>E-Waste Management</strong></h2>
                <h1 className='p-2' style={{ color: "#056EAD" }}><strong>Introduction</strong></h1>
                <p className='text-muted p-2'>Electronic waste, or e-waste, is a term for electronic products that have become unwanted, non-working or obsolete, and have essentially reached the end of their useful life. <br /> <br />
                As per E-waste Rule 2016, the E waste defined as ‘electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes. <br /> <br />
                E-waste contains many valuable, recoverable materials such as aluminum, copper, gold, silver, plastics, and ferrous metals. In order to conserve natural resources and the energy needed to produce new electronic equipment from virgin resources, electronic equipment can be refurbished, reused, and recycled instead of being land filled. <br /> <br />
                E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water.</p>
            </div>
        </div>
      </section>

      <section className='eWastePart3 container-fluid p-4'>
        <div className='container'>
          <h2><strong>Brief On General Scheme Of Collection</strong></h2>
          <p className='eWastePart3text p-4'>We have partnered with Shukla E-waste processor registered with Rajasthan Pollution Control Board for management and dismantling / disposal of all our e-waste. <br /> <br />As a part of agreement, Shukla E-waste processor will collect all our E-waste generated from PAN India and disposes the same at their plant at Shukla E-waste processor,H-309(B), Industrial Area-Bhiwandi-301019, Dist-Alwar (Rajasthan) our e-waste management partner is having all authorization related e-waste dismantling from UPPCB/CPCB and having all connects related to Air/Water/Hazardous waste. They have capacity of 12000 MT per annum. <br /> <br />Keeping in view our sales volume and generation of e-waste as per our future e-waste targets and our expansion plan we have decided to follow these mechanisms in our organization for collection of e-waste. <br /> <br />As per our agreement with Shukla E-waste processor if any customer wants to handover their old product they can reach or call on +91 8305582399. Our representatives explain them about process of disposal and make them aware about nearest drop point available to drop the e-waste also give information about incentive we will offer to them against their end of life product. If any customer wants to handover the material from their door steps we do send either our logistics team or Shukla E-waste processor team to collect the items and channelize the same to our e-waste partner plant for final processing. <br /> <br />Shukla E-waste processor has signed an agreement with Gati – Kintetsu Express Pvt. Ltd. for reverse logistics.</p>
        </div>
      </section>

      <section className='eWastePart4 container-fluid p-4'>
        <div className='container'>
          <h2><strong>Benefit Of Recycling Of E-waste:</strong></h2>
          <p className='eWastePart4text p-4'>E-waste contains many valuable, recoverable materials such as aluminum, copper, gold, silver, plastics, and ferrous metals. In order to conserve natural resources and the energy needed to produce new electronic equipment from virgin resources, electronic equipment can be refurbished, reused, and recycled instead of being land filled. <br /> <br />E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water. <br /> <br />Protects your surroundings- Safe recycling of outdated electronics promotes sound management of toxic chemicals such as lead and mercury. <br /> <br />Conserves natural resources– Recycling recovers valuable materials from old electronics that can be used to make new products. As a result, we save energy, reduce pollution, reduce greenhouse gas emissions, and save resources by extracting fewer raw materials from the earth. <br /> <br />Helps others – Donating your used electronics benefits your community by passing on ready-to-use or refurbished equipment to those who need it. <br /> <br />Saves landfill space – E-waste is a growing waste stream. By recycling these items, landfill space is conserved.</p>
        </div>
      </section>

      <section className='eWastePart5 container-fluid p-4'>
        <div className='container'>
          <h2><strong>Recycling Of E-waste:</strong></h2>
          <p className='eWastePart5text p-4'>The company has tied -up with the Shukla E-waste processor for collection of all our E-waste on PAN India and disposes the same at their plant at H-309(B), Industrial Area-Bhiwandi-301019, Dist-Alwar (Rajasthan).</p>
          <div className='row'>
            <div className='col-md-6 p-4'>
              <h2><strong>Do's</strong></h2>
              <p className='eWastePart5text'><i className="bi bi-check2" style={{ fontSize: '1.5rem' }}></i> Always look for information on the catalogue with your product for end-of-life equipment handling.</p>
              <p className='eWastePart5text'><i className="bi bi-check2" style={{ fontSize: '1.5rem' }}></i> Ensure that only Authorized Recyclers repair and handle your electronic products.</p>
              <p className='eWastePart5text'><i className="bi bi-check2" style={{ fontSize: '1.5rem' }}></i> Always call our E-waste Authorized Collection Centres/points to Dispose products that have reached end-of life.</p>
              <p className='eWastePart5text'><i className="bi bi-check2" style={{ fontSize: '1.5rem' }}></i> Always drop your used electronic products, batteries or any accessories when they reach the end of their life at your nearest Authorized E-Waste Collection Centres/Points.</p>
              <p className='eWastePart5text'><i className="bi bi-check2" style={{ fontSize: '1.5rem' }}></i> Always disconnect the battery from product, and ensure any glass surface is protected against breakage.</p>
            </div>
            <div className='col-md-6 p-4'>
              <h2><strong>Dont's</strong></h2>
              <p className='eWastePart5text'><i className="bi bi-x" style={{ fontSize: '1.5rem' }}></i> Do not dismantle your electronic Products on your own.</p>
              <p className='eWastePart5text'><i className="bi bi-x" style={{ fontSize: '1.5rem' }}></i> Do not throw electronics in bins having “Do not Dispose” sign.</p>
              <p className='eWastePart5text'><i className="bi bi-x" style={{ fontSize: '1.5rem' }}></i> Do not give e-waste to informal (Kabbadi) and unorganized sectors like Local Scrap Dealer/ Rag Pickers.</p>
              <p className='eWastePart5text'><i className="bi bi-x" style={{ fontSize: '1.5rem' }}></i> Do not dispose your product in garbage bins along with municipal waste that ultimately reaches landfills.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='eWastePart6 container-fluid p-4'>
        <div className='container'>
          <h2><strong>Collection Centres:</strong></h2>
          <p className='p-4'>Our Recycler, Shukla E-waste processor has signed an agreement with Gati – Kintetsu Express Pvt. Ltd. for reverse logistics for Channelization of E-waste to the facility.</p>
          <div className='table-responsive'>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" className='eWasteTableHeader'>S.No</th>
                  <th scope="col" className='eWasteTableHeader'>States</th>
                  <th scope="col" className='eWasteTableHeader'>Address</th>
                  <th scope="col" className='eWasteTableHeader'>Toll Free Number</th>
                </tr>
              </thead>
              <tbody>
                {collectionCentres.map((row, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{row.sNo}</th>
                      <td>{row.states}</td>
                      <td>{row.address}</td>
                      <td>{row.tollFreeNumber}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EWaste
