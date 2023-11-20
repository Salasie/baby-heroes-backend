// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MyNFTRenato is ERC721URIStorage, Ownable {
    uint256 public tokenId;

    mapping(uint256 => DataNFT) public tokensData;

    using Strings for uint256;

    struct DataNFT {
        string name;
        string description;
        string imageIPFS;
        string kind;
        uint256 strengh;
        uint256 vitality;
        uint256 agility;
        uint256 dexterity;
    }

    constructor(address initialOwner) ERC721("Rindojishi", "RIN") Ownable(initialOwner) {}

    function mintNFT(address recipient, string memory uri) public onlyOwner returns (uint256)
    {
        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, uri);
        tokenId++;
        return tokenId;
    }

    function mintNFT2(address recipient) public onlyOwner returns (uint256)
    {
        tokensData[tokenId] = DataNFT(
            "Baby Heroes",
            "Baby heroes OP",
            "QmXXJ1tE5dHXD4AwtcWGzwQHqp3LSqTwS8HPJPKNYQX97U",
            "normal",
            10,
            10,
            10,
            10
        );        
        _safeMint(recipient, tokenId);

        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "', tokensData[tokenId] .name, '",',
                '"description": "', tokensData[tokenId] .description, '",',
                '"image": "https://jade-worthy-tahr-500.mypinata.cloud/ipfs/',  tokensData[tokenId] .imageIPFS, '/"',
            '}'
        );

        _setTokenURI(tokenId, 
        string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        )
        ) ;

        tokenId++;
        return tokenId;
    }    

}


/*
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Panda is ERC721, ERC721URIStorage, Ownable {
    uint256 private tokenId;

    constructor() ERC721("Panda", "PND") {}

    function mint(string memory uri)
        public
    {
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        tokenId++;
    }

    function _burn(uint256 _tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(_tokenId);
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(_tokenId);
    }
}

*/

/*



pragma solidity ^0.8.20;

import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameItem is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("GameItem", "ITM") {}

    function awardItem(address player, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _mint(player, tokenId);
        _setTokenURI(tokenId, tokenURI);
        return tokenId;
    }
}
*/
/*

pragma solidity ^0.8.20;



import "@openzeppelin/contracts/access/Ownable.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract MyNFT is ERC721 {
    constructor() ERC721("MyNFT", "MNFT") {
    }
}


*/

/*
contract MyNFTRenato is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MyNFTRenato", "RIN") {}

    function mintNFT(address recipient, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
                                                */