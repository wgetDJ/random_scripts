// This script will clear your myntra wishlist by deleting all the saved items.
// Steps:
// 1. Open myntra.com
// 2. Click on your wishlist
// 3. Open console (Ctrl + Shift + J) or (fn + F12)
// 4. Load the full wishlist by scrolling down
// 5. Paste the code below and hit enter.

function deleteSavedItems() {
    // Check the class name of remove icon by inspecting the element
    let query = document.getElementsByClassName("itemcard-removeIcon") // Paste the icon class name here
    timeout(query)
}

function timeout(query) {
    if (query.length) query[0].click()
    
    if (query.length > 1) setTimeout(deleteSavedItems, 100)
    
    else console.log('Finished')
}

deleteSavedItems()