// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IWhitelist.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Whitelist is IWhitelist, AccessControl{

    bytes32 public constant WHITELISTED = keccak256("WHITELISTED");

    event AddedToWhitelist(address indexed account);
    event RemovedFromWhitelist(address indexed account);

    constructor() {
        // Grant the contract deployer the default admin role: it will be able
        // to grant and revoke any roles
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function add(address account) public  override onlyRole(getRoleAdmin(WHITELISTED)) returns(bool) {
        _grantRole(WHITELISTED, account);
        emit AddedToWhitelist(account);
        return true;
    }

    function remove(address account) public override onlyRole(getRoleAdmin(WHITELISTED)) returns(bool) {
        _revokeRole(WHITELISTED, account);
        emit RemovedFromWhitelist(account);
        return true;
    }

    function isWhitelisted(address account) public view override returns(bool) {
       return hasRole(WHITELISTED, account);  
    }

    //====================================================================================================

    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {
        revert();
    }
    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {
        revert();
    }
    function renounceRole(bytes32 role, address account) public virtual override {
        revert();
    }
}