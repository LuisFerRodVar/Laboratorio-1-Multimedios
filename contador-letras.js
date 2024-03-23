function contador_letras(frase){
	let resultado = {};
	for(let i = 0; i < frase.length; i ++){
		if(resultado[frase[i]] == undefined){
			resultado[frase[i]] = 1;
		}else{
			resultado[frase[i]] = resultado[frase[i]] + 1;
		}
	}
	return resultado;
}
console.log(contador_letras("El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad."));

