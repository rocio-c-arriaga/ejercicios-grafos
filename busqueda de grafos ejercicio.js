function BFS (adyacencia,inicio) {

visitados = [];
porVisitar = []; //queue en lugar es stack

debugger;
//si metemos el debugger dentro del ciclo es para ver el nodo por nodo, se mueve para no hacerlo nodo por nodo
//agregamos el primer elemento del recorrido (inicio) a la
// lista de nodos visitados
visitados.push(inicio);

//para que entre una vez 
do{

	//obtenemos el ultimo nodo visitado
   ultimoVisitado = visitados[visitados.length -1] 

	//obtenemos los nodos del último nodo visitado
   nodosPorVisitar = adyacencia [ultimoVisitado][1];

   
	//agregamos los nodos temporales a nuestra lista
	//de nodos por visitar

//recorrer arreglos:

   for (i = 0; i < nodosPorVisitar.length; i++)
   {
   if(!visitados.includes(nodosPorVisitar[i]))
    porVisitar.push(nodosPorVisitar[i]);
   }
   }
	//remover el siguiente elemnto para visitar y moverlo a visitados
//desencolar
     siguienteVisita = porVisitar.pop();//SHIFT (BFS)es busqueda de anchura y POP (PFS) es busqueda de profundidad 
     if(!visitados.includes (siguienteVisita)){
     visitados.push(siguienteVisita);
     }
     }
   

//cuando no se sabe cuantas vueltas se va hacer
while (porVisitar !==null && porVisitar.lenght > 0)

return visitados;


//complemnto instalado para checar o indicar en la consola que da el editor y ver el estado del codigo

bfs= new BFS(adyacencia,0);

adyacencia = [[0,[1,2]], [1,[0,3]], [2,[0,4]],[3,[1,4]],[4,[3,2]]];


adyacencia = [[0,[2,3]], [1,[3]], [2,[0,4]],[3,[0,1,4,5]],[4,[2,3,6,7]],[5,[3]],[6,[4]], [7,[4]]];

while (visitados.length < adyacencia.length); //cambiar