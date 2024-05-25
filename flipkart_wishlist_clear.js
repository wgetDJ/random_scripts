// This script will clear your flipkart wishlist by deleting all the saved items.
// Steps:
// 1. Open flipkart.com
// 2. Click on your wishlist
// 3. Open console (Ctrl + Shift + J) or (fn + F12)
// 4. Click on "Load More" cause it will delete all visible items.
// 5. Paste the code below and hit enter.

function deleteSavedItems() {
    // Check the class name of delete icon by inspecting the element
    let query = document.getElementsByClassName("Mj62aK") // Paste the icon class name here
    timeout(query)
    // Click on the delete button and then check the class name of remove / delete text by inspecting the element
    query = document.getElementsByClassName("QqFHMw AyekA8") // Paste the text class name here
    timeout(query)
}

function timeout(query) {
    if (query.length) query[0].click()
    
    if (query.length > 1) setTimeout(deleteSavedItems, 100)
    
    else console.log('Finished')
}

deleteSavedItems()