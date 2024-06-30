
document.addEventListener('DOMContentLoaded', () => {
    const myTreeContainer = document.getElementById('myTreeContainer');
    
    function myCreateLeaf() {
        const myLeaf = document.createElement('div');
        myLeaf.classList.add('myLeaf');
        myLeaf.style.left = `${Math.random() * 100}vw`;
        myLeaf.style.animationDuration = `${Math.random() * 3 + 3}s`;
        myTreeContainer.appendChild(myLeaf);
        
        setTimeout(() => {
            myLeaf.remove();
        }, 5000);
    }
    
    setInterval(myCreateLeaf, 300);
});
