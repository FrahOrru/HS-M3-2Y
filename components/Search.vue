<template>
    <div class="search-bar">
        <input type="text" class="search-input" id="search-input" placeholder="Search...">
        <button class="search-button" id="search-button">Search</button>
    </div>
</template>
<style scoped>
.search-bar {
    margin: 1rem 0;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2rem;
}
.search-input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  width: 50%;
}

.search-button {
  padding: 8px 16px;
  font-size: 16px;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  background: rgba(255, 255, 255, 0.49);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    
}

.search-button:hover {
    background: rgba(255, 255, 255, 0.49);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    
}
</style>