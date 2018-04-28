function isEven(n) 
{
   return n % 2 == 0;
}

function isEmpty(str) 
{
    return (!str || 0 === str.length);
}

function splitString(stringToSplit, separator)
{
	var ArrayOfStrings = stringToSplit.split(separator);
	return ArrayOfStrings;
}

function eliminav(linha)
{
	var linha1 = new splitString(linha,'"');
	var n = linha1.length;
	for(i=0;i<n;i++){
		if(isEven(i)){}
		else{
			linha1[i] = linha1[i].replace(',','/');	
		}
	}
	var var1= linha1.join('');
	return var1;
	
}


function ArrumaHeaderRepetido(csv)
{
	var linhas = csv.split("\n");
	var nlinhas = linhas.length;
	var newcsv=[]
	var arq = [];
	var header = linhas[0].split(",");
	var contadorderepetidos = [];
	var tam = header.length;
	for(i=0;i<tam-1;i++){
		var compara1 = header[i];
		for(j=i+1;j<tam;j++){
			var compara2 = header[j];
			if(compara1 == compara2){
				for(l=j;l<tam;l++){
					if(l==tam-1){}
					else{
					header[l]=header[l+1];	
					}
				}
				header[tam-1] ='';
				newcsv = header.join(',');
				for(k=1;k<nlinhas;k++){
					var coluna = linhas[k].split(",");
					coluna[i]= coluna[i].concat(" / ");
					coluna[i]=coluna[i].concat(coluna[j]);
					for(m=j;m<tam-1;m++){
							coluna[m] = coluna[m+1];
					}
					coluna[tam-1]='';
					var coluna1 = coluna.join(',');
					newcsv = newcsv.concat('\n');
					newcsv = newcsv.concat(coluna1);
				}
	
			}
			
		}
		
	}
	return newcsv;
}


function ArrumaLinhasRepetidas(csv, pos)
{
	var linhas = csv.split('\n');
	var nlinhas = linhas.length;
	for(i=1;i<nlinhas-1;i++){
		var linecmp1 = linhas[i].split(",");
		var ncol = linecmp1.length;
		var idcmp1 = linecmp1[pos];
		for(j=i+1;j<nlinhas;j++){
			var linecmp2 = linhas[j].split(",");
			var idcmp2 = linecmp2[pos];
			if(idcmp2 == idcmp1 && idcmp1 != ''){
				for(k=0;k<pos;k++){
					var cmp1 = linecmp1[k];
					var cmp2 = linecmp2[k];	
					if(cmp1 == cmp2){
					}
					else{
						cmp1 = cmp1.concat("/");
						cmp1 = cmp1.concat(cmp2);
						linecmp1[k] = cmp1;
					}
				}
				for(k=pos+1;k<ncol;k++){
					var cmp1 = linecmp1[k];
					var cmp2 = linecmp2[k];
					if(cmp1 == cmp2){
					
					}
				else{	//console.log('elementos diferentes')
						cmp1 = cmp1.concat("/");
						cmp1 = cmp1.concat(cmp2);
						linecmp1[k] = cmp1;
					}
					
				}
				
			for(y=0;y<ncol;y++){
				linecmp2[y] = '';
			}	
			linecmp2[pos]='';
			linecmp2[0]='***';
			
			linhas[i] = linecmp1.join(',');
			linhas[j] = linecmp2.join(',');
			}
			
		}
		
	}
	var norepeats = linhas.join('\n');
	return norepeats;
	
	
}

function isemail(string)
{
	var s = string.split('@');
	if(s.length==2){
		return true;
	}
	else{return false;}
}

function tiraespacoemail(string)
{
	var s = string.split('@');
	var x = s[1].split(' ');
	var email = s[0].concat('@');
	email = email.concat(x[0]);
	return email;
}

function telephone(string)
{
	var numberPattern = /\d+/g;
	var n = string.match(numberPattern);
	if(n == null){return '';}
	if(n.length == 2){
		var n2 =n[1];
		if(n2.length == 8){
			if(parseInt(n2[0]) < 6)
			{
				var numero = '55'
				var numero = numero.concat(n[0]);
				var numero = numero.concat(n[1]);
				return numero;
			}else{return '';}
			
		}
		if(n2.length == 9){
			if(parseInt(n2[0])>6){
				var numero = '55'
				var numero = numero.concat(n[0]);
				var numero = numero.concat(n[1]);
				return numero;
			}else{console.log('no');}
			
		}
	}
	if(n.length == 1){
		var k = n[0];
		if(k.length == 10){
			var v = parseInt(k[2]);
			if(v<6)
			{
				var numero = '55'
				var numero = numero.concat(n[0]);
				var numero = numero.concat(n[1]);
				return numero;
			}else{return '';}
		}
		if(k.length == 11){
			var v = parseInt(k[2]);
			var v2 = parseInt(k[3]);
			if(v == 9 && v2 >5){
				var numero = '55'
				var numero = numero.concat(n[0]);
				var numero = numero.concat(n[1]);
				return numero;
			}else{return '';}
		}
		
	}
	return '';	
	
}

function Arruma(csv)
{
	var lines = csv.split("\n");
	var result = [];
	var headers = lines[0].split(",");
	var	phone = 'phone';
	var email = 'email';
	var celula1 = '';
	var result = [];
	var str='';
	for(var i =1;i<lines.length;i++){//cada linha
		var obj = {
			'see_all' : 'false',
			'invisible' : 'false'
		};
		var addr = [];
		
		var col = lines[i].split(",");
		if(col[0] == '***'){}
		else{
		for(j = 0;j<headers.length;j++){//cada coluna
			var head=headers[j];
			var celula1 = col[j].split("/");
			celula1 = celula1.filter(function(entry){return entry.trim() != '';});
			for(m=0;m<celula1.length;m++){
				var h1 = {}
				str = celula1[m].trim();
				celula1[m] = str;
				if(str==null || isEmpty(str)){}
				else{
					if(headers[j].includes(phone)){
						var x1 = telephone(str);
						var sub1= headers[j].replace(phone,"");
						var sub2 = sub1.split("/");
						h1['type']='phone';
						h1['tags']=sub2.join(",");
						h1['address']=x1;
						if(x1 !==''){
						addr.push(h1);}	
					}
					else{
						if(headers[j].includes(email)){
							if(isemail(str)){
							var sub1= headers[j].replace(email,"");
							var sub2 = sub1.split("/");
							h1['type']='email';
							h1['tags']=sub2.join(",");
							x = tiraespacoemail(str)
							h1['address']=x;
							addr.push(h1);}
						}
						else{
							key=head;
							if(celula1 == 'no' || celula1 == ''|| celula1 == '0'){
								celula1 = 'false';
							}
							if(celula1 == 'yes' || celula1 == '1'){
								celula1 = 'true';
							}
							if(celula1.length>1){
							obj[key] = celula1;}
							else{
								var string1 = celula1[0];
								obj[key]= string1;
							}
						}
					}
						
				}
				
			}
		}
		var str2 = JSON.stringify(addr);
		var finalData = str2.replace(/\\/g, "");
		obj['addresses']=finalData;
		result.push(obj)
		}
	}
	
	return result;
}


function main()
{
var fs = require('fs');	
var input =fs.readFileSync('input.csv','utf8',function(err,data){
	});//le o input
var datalinha = new splitString(input, '\n');
var lin = datalinha.length;
for(j=0;j<lin;j++){
	datalinha[j] = eliminav(datalinha[j]);	
}

var temp = datalinha.join('\n');
var final1 = ArrumaHeaderRepetido(temp);
var final2 = ArrumaLinhasRepetidas(final1,1);
var final3 = Arruma(final2);
var final4 = JSON.stringify(final3, null,'\t');
var finalData = final4.replace(/\\/g, "");
fs.writeFile("output.json",finalData,'utf8',function(err){
if(err){return console.log(err);}else{console.log("salvo em output.json")}});}

main();
