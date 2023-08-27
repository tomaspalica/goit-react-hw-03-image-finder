const Searchbar = ({onSubmit})=> (
<header className="searchbar">
  <form className="form">
    <button type="submit" className="button">
      <span class="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  );