// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";


contract Psalmuel is ERC721, Ownable {

    string private customBaseURI;

    constructor(string memory baseURI) ERC721("Psalmuel", "SAM") {
        customBaseURI = baseURI;
    }

    function setCustomBaseURI(string memory baseURI) external onlyOwner {
        customBaseURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return customBaseURI;
    }

    function safeMint(address to, uint tokenId) public {
        _safeMint(to, tokenId);
    }

}
