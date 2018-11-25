function marks()
			{
				//subject1 aat marks
				var sub1a1=document.getElementById("txtsub1aat1").value;
				sub1a1=parseInt(sub1a1);
				var sub1a2=document.getElementById("txtsub1aat2").value;
				sub1a2=parseInt(sub1a2);
				if(sub1a1<=10 && sub1a2<=10){
					var avgsub1a=(sub1a1+sub1a2)/2;
					sub1aat=avgsub1a;
					
				}
				else
				{
					window.alert("Please enter the correct Subject1 AAT marks marks");
				}
				
				
				//subject2 aat marks
				var sub2a1=document.getElementById("txtsub2aat1").value;
				sub2a1=parseInt(sub2a1);
				var sub2a2=document.getElementById("txtsub2aat2").value;
				sub2a2=parseInt(sub2a2);
				if(sub2a1<=10 && sub2a2<=10){
					var avgsub2a=(sub2a1+sub2a2)/2;
					sub2aat=Math.round(avgsub2a);
					
				}
				else
				{
					window.alert("Please enter the correct Subject2 AAT marks marks");
				}
				
				//subject3 aat marks
				var sub3a1=document.getElementById("txtsub3aat1").value;
				sub3a1=parseInt(sub3a1);
				var sub3a2=document.getElementById("txtsub3aat2").value;
				sub3a2=parseInt(sub3a2);
				if(sub3a1<=10 && sub3a2<=10){
					var avgsub3a=(sub3a1+sub3a2)/2;
					sub3aat=Math.round(avgsub3a);
					
				}
				else
				{
					window.alert("Please enter the correct Subject3 AAT marks marks");
				}
				
				//subject4 aat marks
				var sub4a1=document.getElementById("txtsub4aat1").value;
				sub4a1=parseInt(sub4a1);
				var sub4a2=document.getElementById("txtsub4aat2").value;
				sub4a2=parseInt(sub4a2);
				if(sub4a1<=10 && sub4a2<=10){
					var avgsub4a=(sub4a1+sub4a2)/2;
					sub4aat=Math.round(avgsub4a);
					
				}
				else
				{
					window.alert("Please enter the correct Subject4 AAT marks marks");
				}
				
				
				//subject5 aat marks
				var sub5a1=document.getElementById("txtsub5aat1").value;
				sub5a1=parseInt(sub5a1);
				var sub5a2=document.getElementById("txtsub5aat2").value;
				sub5a2=parseInt(sub5a2);
				if(sub5a1<=10 && sub5a2<=10){
					var avgsub5a=(sub5a1+sub5a2)/2;
					sub5aat=Math.round(avgsub5a);
					
				}
				else
				{
					window.alert("Please enter the correct Subject5 AAT marks marks");
				}
				
				
				//subject6 aat marks
				var sub6a1=document.getElementById("txtsub6aat1").value;
				sub6a1=parseInt(sub6a1);
				var sub6a2=document.getElementById("txtsub6aat2").value;
				sub6a2=parseInt(sub6a2);
				if(sub6a1<=10 && sub6a2<=10){
					var avgsub6a=(sub6a1+sub6a2)/2;
					sub6aat=Math.round(avgsub6a);
					
				}
				else
				{
					window.alert("Please enter the correct Subject6 AAT marks marks");
				}
				
				
				
				//midmarks sub1 calculation
				var sub1m1=document.getElementById("txtsub1mid1").value;
				sub1m1=parseInt(sub1m1);
				var sub1m2=document.getElementById("txtsub1mid2").value;
				sub1m2=parseInt(sub1m2);
				var max=sub1m1;
				var sub1mm1=0,sub1mm2=0;
				var sub1mid=0;
				if(sub1m2>=max)
				{
					max=sub1m2;
				}
				if(sub1m1<=30 && sub1m2<=30)
				{
					if(max==sub1m1)
					{
						sub1mm1=(sub1m1*17.5)/30;
						sub1mm2=(sub1m2*7.5)/30;
					}
					else if(max==sub1m2)
					{
						sub1mm1=(sub1m2*17.5)/30;
						sub1mm2=(sub1m1*7.5)/30;
					}
					sub1mid=Math.round(sub1mm1+sub1mm2);
				}
				else{
					window.alert("Please enter the correct Subject1 MID marks marks");
				}
				
				var att1= sel1.options[sel1.selectedIndex].value;
				att1=parseInt(att1);
				
				var total1=Math.round(sub1aat+sub1mid+att1);
				
				tbl2.hidden=false;
				document.getElementById("pat1").innerHTML=sub1aat;
				document.getElementById("pm1").innerHTML=sub1mid;
				document.getElementById("pa1").innerHTML=att1;
				document.getElementById("t1").innerHTML=total1;
				
				
				
				//midmarks sub2 calculation
				var sub2m1=document.getElementById("txtsub2mid1").value;
				sub2m1=parseInt(sub2m1);
				var sub2m2=document.getElementById("txtsub2mid2").value;
				sub2m2=parseInt(sub2m2);
				var max=sub2m1;
				var sub2mm1=0,sub2mm2=0;
				var sub2mid=0;
				if(sub2m2>=max)
				{
					max=sub2m2;
				}
				if(sub2m1<=30 && sub2m2<=30)
				{
					if(max==sub2m1)
					{
						sub2mm1=(sub2m1*17.5)/30;
						sub2mm2=(sub2m2*7.5)/30;
					}
					else if(max==sub2m2)
					{
						sub2mm1=(sub2m2*17.5)/30;
						sub2mm2=(sub2m1*7.5)/30;
					}
					sub2mid=Math.round(sub2mm1+sub2mm2);
					
				}
				else{
					window.alert("Please enter the correct Subject2 MID marks marks");
				}
				
				var att2= sel2.options[sel2.selectedIndex].value;
				att2=parseInt(att2);
				
				var total2=Math.round(sub2aat+sub2mid+att2);
				
				tbl2.hidden=false;
				document.getElementById("pat2").innerHTML=sub2aat;
				document.getElementById("pm2").innerHTML=sub2mid;
				document.getElementById("pa2").innerHTML=att2;
				document.getElementById("t2").innerHTML=total2;
				
				
				
				//midmarks sub3 calculation
				var sub3m1=document.getElementById("txtsub3mid1").value;
				sub3m1=parseInt(sub3m1);
				var sub3m2=document.getElementById("txtsub3mid2").value;
				sub3m2=parseInt(sub3m2);
				var max=sub3m1;
				var sub3mm1=0,sub3mm2=0;
				var sub3mid=0;
				if(sub3m2>=max)
				{
					max=sub3m2;
				}
				if(sub3m1<=30 && sub3m2<=30)
				{
					if(max==sub3m1)
					{
						sub3mm1=(sub3m1*17.5)/30;
						sub3mm2=(sub3m2*7.5)/30;
					}
					else if(max==sub3m2)
					{
						sub3mm1=(sub3m2*17.5)/30;
						sub3mm2=(sub3m1*7.5)/30;
					}
					sub3mid=Math.round(sub3mm1+sub3mm2);
					
				}
				else{
					window.alert("Please enter the correct Subject3 MID marks marks");
				}
				
				var att3= sel3.options[sel3.selectedIndex].value;
				att3=parseInt(att3);
				
				var total3=Math.round(sub3aat+sub3mid+att3);
				
				tbl2.hidden=false;
				document.getElementById("pat3").innerHTML=sub3aat;
				document.getElementById("pm3").innerHTML=sub3mid;
				document.getElementById("pa3").innerHTML=att3;
				document.getElementById("t3").innerHTML=total3;
				
				
				//midmarks sub4 calculation
				var sub4m1=document.getElementById("txtsub4mid1").value;
				sub4m1=parseInt(sub4m1);
				var sub4m2=document.getElementById("txtsub4mid2").value;
				sub4m2=parseInt(sub4m2);
				var max=sub4m1;
				var sub4mm1=0,sub4mm2=0;
				var sub4mid=0;
				if(sub4m2>=max)
				{
					max=sub4m2;
				}
				if(sub4m1<=30 && sub4m2<=30)
				{
					if(max==sub4m1)
					{
						sub4mm1=(sub4m1*17.5)/30;
						sub4mm2=(sub4m2*7.5)/30;
					}
					else if(max==sub4m2)
					{
						sub4mm1=(sub4m2*17.5)/30;
						sub4mm2=(sub4m1*7.5)/30;
					}
					sub4mid=Math.round(sub4mm1+sub4mm2);
					
				}
				else{
					window.alert("Please enter the correct Subject4 MID marks marks");
				}
				
				var att4= sel4.options[sel4.selectedIndex].value;
				att4=parseInt(att4);
				
				var total4=Math.round(sub4aat+sub4mid+att4);
				
				tbl2.hidden=false;
				document.getElementById("pat4").innerHTML=sub4aat;
				document.getElementById("pm4").innerHTML=sub4mid;
				document.getElementById("pa4").innerHTML=att4;
				document.getElementById("t4").innerHTML=total4;
				
				
				
				
				//midmarks sub5 calculation
				var sub5m1=document.getElementById("txtsub5mid1").value;
				sub5m1=parseInt(sub5m1);
				var sub5m2=document.getElementById("txtsub5mid2").value;
				sub5m2=parseInt(sub5m2);
				var max=sub5m1;
				var sub5mm1=0,sub5mm2=0;
				var sub5mid=0;
				if(sub5m2>=max)
				{
					max=sub5m2;
				}
				if(sub5m1<=30 && sub5m2<=30)
				{
					if(max==sub5m1)
					{
						sub5mm1=(sub5m1*17.5)/30;
						sub5mm2=(sub5m2*7.5)/30;
					}
					else if(max==sub5m2)
					{
						sub5mm1=(sub5m2*17.5)/30;
						sub5mm2=(sub5m1*7.5)/30;
					}
					sub5mid=Math.round(sub5mm1+sub5mm2);
					
				}
				else{
					window.alert("Please enter the correct Subject5 MID marks marks");
				}
				
				var att5= sel5.options[sel5.selectedIndex].value;
				att5=parseInt(att5);
				
				var total5=Math.round(sub5aat+sub5mid+att5);
				
				tbl2.hidden=false;
				document.getElementById("pat5").innerHTML=sub5aat;
				document.getElementById("pm5").innerHTML=sub5mid;
				document.getElementById("pa5").innerHTML=att5;
				document.getElementById("t5").innerHTML=total5;
				
				
				
				//midmarks sub6 calculation
				var sub6m1=document.getElementById("txtsub6mid1").value;
				sub6m1=parseInt(sub6m1);
				var sub6m2=document.getElementById("txtsub6mid2").value;
				sub6m2=parseInt(sub6m2);
				var max=sub6m1;
				var sub6mm1=0,sub6mm2=0;
				var sub6mid=0;
				if(sub6m2>=max)
				{
					max=sub6m2;
				}
				if(sub6m1<=30 && sub6m2<=30)
				{
					if(max==sub6m1)
					{
						sub6mm1=(sub6m1*17.5)/30;
						sub6mm2=(sub6m2*7.5)/30;
					}
					else if(max==sub6m2)
					{
						sub6mm1=(sub6m2*17.5)/30;
						sub6mm2=(sub6m1*7.5)/30;
					}
					sub6mid=Math.round(sub6mm1+sub6mm2);
					
				}
				else{
					window.alert("Please enter the correct Subject6 MID marks marks");
				}
				
				var att6= sel6.options[sel6.selectedIndex].value;
				att6=parseInt(att6);
				
				var total6=Math.round(sub6aat+sub6mid+att6);
				
				tbl2.hidden=false;
				document.getElementById("pat6").innerHTML=sub6aat;
				document.getElementById("pm6").innerHTML=sub6mid;
				document.getElementById("pa6").innerHTML=att6;
				document.getElementById("t6").innerHTML=total6;
				
				
				
				var lab1=document.getElementById("l1").value;
				lab1=parseInt(lab1);
				document.getElementById("la1").innerHTML=lab1;
				
				var lab2=document.getElementById("l2").value;
				lab2=parseInt(lab2);
				document.getElementById("la2").innerHTML=lab2;
				
				var lab3=document.getElementById("l3").value;
				lab3=parseInt(lab3);
				document.getElementById("la3").innerHTML=lab3;
				
				var grand=total1+total2+total3+total4+total5+total6+lab1+lab2+lab3;
				document.getElementById("final").innerHTML=grand;
}
			
