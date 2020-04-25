var menuItem={
    "id": "count",
    "title": "Word-count",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);
chrome.contextMenus.onClicked.addListener(function(clickData)
{   
    if (clickData.menuItemId == "count" && clickData.selectionText)
    {
        let wordcount = 0;
        var data=clickData.selectionText;
        for(let i=0;i<data.length;i++)
        {
            if(data[i]===' ')
            {
                if (data[i + 1]!==' ')
                {
                    wordcount++;
                }
            }
        }
        wordcount=wordcount+1;//To count the last word of selection.
        alert("Number of words in the given selection is "+wordcount);        
    }
});