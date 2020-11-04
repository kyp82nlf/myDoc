# Lua API

## Overview

Remove some of Lua's features, not providing IO, OS, Coroutine, Debug, package libraries.

Deos not support:

collectgarbage, dofile, getmetatable, loadfile, load, lpcall, setmetatable, xpcall.

Support:

assert, error, ipairs, next, pairs, warn, tonumber, tostring, type.

Keep Lua Table and the basic grammar.

## Methods
| Method                                         | Description                      |
| :-------------------------------------------------- | :------------------------------             |
|require_owner_auth():bool                              | Is the account that is executing the contract the contract parent account? |
|exec_account():string                                 	| Get the account that is running the contract. |
|get_balance():number                                	| Get the contract account's parent account's balance.         |
|get_pay_fee():string,number,string                     | Gets transaction cost information for the contract runner. |
|create_key(key:string):nil                             | Create a String property named key. |
|set_key(key:string, value:string):nil                  | Set the key and value of the String property. |
|get_key(key:string):string                             | Returns a String property named key. |
|lcreate(key:string):nil								|Create a List property named Key.                        |
|lpush(key:string, value:string):nil					|Add value to the left side of the list property named Key.              |
|rpush(key:string, value:string):nil					|Add value to the right side of the list property named Key.              |
|lpop(key:string):string								|Deletes 1 element on the left of the list property named key, returning the deleted element.|
|rpop(key:string):string								|Deletes 1 element on the right of the list property named key, returning the deleted element.|
|ldel(key:string):nil									|Delete the list property named key.。                        |
|llen(key:string):number								|Returns the length of the list property named key.                  |
|lall(key:string):table									|Returns all elements of the list property named key.                 |
|hcreate(key:string):nil								|Create a hash_map property named key.                    |
|hset(key:string, field:string, value:string):nil		|Add key and value to the hash_map named Key: field and value,|
|hget(key:string, field:string):string					|Returns the value of field in a hash_map named key.       |
|hlen(key:string):number								|Returns the size of a hash_map named key.                  |
|hdel(key:string):nil									|Delete the hash_map named Key.                       |
|grant(account:string, amount:number):nil				|The amount transferred to the account.                     |
|random_seed():number									|Random number under account.                             |

## Sample of Single Chat

Both parties join the chat, then call send_chat to send the chat.

```lua
-- 
IN 	            = '1';
OUT             = '0';
MAX_NUMBER      = 256;--Maximum number of chats
MAX_CONTENT_LEN = 128;--Longest chat content
CHAT_USERS_KEY 	= 'chat_users';
CHAT_KEY 		= 'chat';
SENDER 			= 'sender';
RECEIVER 		= 'receiver';
TIMESTAMP 		= 'timestamp';
CONTENT			= 'content';
-- Initialization method
function init()
    lcreate(CHAT_KEY);
	hcreate(CHAT_USERS_KEY);
end
-- Add user
function add_user()
	hset(CHAT_USERS_KEY, exec_account(), IN);
end
-- Delete user
function del_user()
	hset(CHAT_USERS_KEY, exec_account(), OUT);
end
--[[
Send Chat
receiver 	
timestamp 	
content		
--]]
function send_chat(receiver, timestamp, content)
	local sender = exec_account();
	local sender_user_state = hget(CHAT_USERS_KEY, sender);
	local receiver_user_state = hget(CHAT_USERS_KEY, receiver);
	if sender_user_state ~= IN or receiver_user_state ~= IN then
		error('user first need add to chat_users');
	end
	if #content >= MAX_CONTENT_LEN then
		error('content length must less than '.. MAX_CONTENT_LEN);
	end
	if llen(CHAT_KEY) >= MAX_NUMBER then
		lpop(CHAT_KEY);
	end
    local chat_info = '{"'.. SENDER .. '":"' .. sender .. '","' .. RECEIVER .. '":"' .. receiver .. '","'.. TIMESTAMP .. '":' .. timestamp ..',"'.. CONTENT .. '":"' .. content .. '"}';
	rpush(CHAT_KEY, chat_info);
end
```