pragma solidity ^0.8.0;

interface IWhitelist {
    function add(address account) external returns(bool);
    function remove(address account) external returns(bool);
    function isWhitelisted(address account)external returns(bool);
}