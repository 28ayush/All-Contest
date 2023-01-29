

const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '4c230690f5msh3b6a7fa77a01f68p1a077bjsnee5c10bcae97',
		'X-RapidAPI-Host': 'contests7.p.rapidapi.com'
	}
};

const url = 'https://contests7.p.rapidapi.com/contests';


    fetch(url,options)
    .then(data=>data.json())
    .then(item=>{

        let tabledata="";
       
      
        item.map((values)=>{
            let time1=new Date(`${values.start_time}`);
            let m=time1.getMonth()+1;
           let t1= time1.getDate()+"/"+m+"/"+time1.getFullYear().toString();
           let hr1=time1.getHours();
           let mn1=time1.getMinutes();
           let hr=hr1+":"+mn1;

           let time2=new Date(`${values.end_time}`);
           let m1=time2.getMonth()+1;
          let t2= time2.getDate()+"/"+m1+"/"+time2.getFullYear().toString();
          let hr2=time2.getHours();
          let mn2=time2.getMinutes();
          let hrs=hr2+":"+mn2;


            tabledata+=`<tr>
            <th>${values.name}</th>
            <td>${t1}<br>${hr}</td>
            <td>${t2}<br>${hrs}</td>
          
            <td>  <a target="_blank" href="${values.url}">${values.site}</a></td>
          </tr>`;
        });
        document.getElementById("table_data").innerHTML=tabledata;

    })



