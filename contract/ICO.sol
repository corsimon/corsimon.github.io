pragma solidity ^0.4.0;

contract ICO {
    address admin;
    
    event received(address,uint256);
    event paid(address,uint256);
    
    function ICO() public {
        admin = msg.sender;
    }
    
    function () payable public {
        uint256 montantEthers = msg.value;
        address acheteur = msg.sender;
        received(acheteur,montantEthers);
        uint256 montantTokens = montantEthers*1000;
        // send montantTokens à acheteur
        paid(acheteur,montantTokens);
    }
    
    function printAdmin() returns (address) {
        return admin;
    }
    
    function kill() public {
        if(msg.sender==admin){
            selfdestruct(admin);
        }
    }
}
// blockizor.com/contract.html#adresseducontrat