function SearchBar({characterID}) {
   return (
      <div>
         <input type='search' />
         <button onClick={characterID}>Agregar</button>
      </div>
   );
}

export default SearchBar
