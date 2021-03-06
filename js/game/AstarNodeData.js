
class NodeAstarData
{
    constructor(hCost = 0, gCost = 0, thisNode, parent = null)
    {
        this.node = thisNode;
        this.hCost = hCost;
        this.gCost = gCost;
        this.parent = null;
        this.multiplyFactor = 1;
    }

    get fCost()
    {
        return (this.hCost + this.gCost) * this.multiplyFactor;
    }
}