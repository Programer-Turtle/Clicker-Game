let Count = 0;
let Count_Amount = 1

//Check if Count is stored.
if (localStorage.getItem("Count"))
{
    Count = parseInt(localStorage.getItem("Count"))
}
else
{
    localStorage.setItem("Count", 0)
}

//Check if Count_Amount is stored.
if(localStorage.getItem("Count_Amount"))
{
    Count_Amount = parseInt(localStorage.getItem("Count_Amount"));
}
else
{
    localStorage.setItem("Count_Amount", 1)
}

function SetCounter()
{
    ChangeInnerText('Counter', Count)
}

function SetUpgradeData(add, Rank, Color)
{
    localStorage.setItem("Count_Amount", add)
    Count_Amount = add
    ChangeInnerText('Rank', Rank)
    ChangeInnerText('Additor', `+${add}`)
    ChangeBackgroundColor('Button', Color)
}

function CheckUpgrade()
{
    if(Count >= 20000)
    {
        SetUpgradeData(100, 'Ultimate', "purple")
        return 
    }
    if(Count >= 5000)
    {
        SetUpgradeData(30, 'Mega', "Yellow")
        return
    }
    if(Count >= 200)
    {
        SetUpgradeData(10, 'Powerful', "lime")
        return
    }
    if (Count >= 10)
    {
        SetUpgradeData(2, 'Doubled', "blue")
        return
    }
}

function Click()
{
    Count += Count_Amount
    localStorage.setItem("Count", Count)
    SetCounter();
    CheckUpgrade();
}

CheckUpgrade();
SetCounter();