var AV = require('avoscloud-sdk').AV;
AV.initialize("mirf0f93ohkzc4kquhcd26gl9j46tuwl9psz9capgchuovzu","0gxijvry3s0x2kh55zueo9c65bdg6z4a23lzn1x22i305yn5");

exports.getAV = function()
{
    return AV;
}
