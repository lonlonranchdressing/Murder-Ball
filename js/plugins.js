// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"HIME_ActorBattleCommands","status":true,"description":"v1.4 - Provides you with tools to customize and manage actor\r\nbattle commands.","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.46 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"screenWidth - 16 - (maxSize + 2) * 32 + index * 1","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"8","Animation Next Delay":"12","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth -  16 - (maxSize + 2) * 5 + index * 3","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"false","---Damage Popups---":"","Popup Duration":"120","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"60","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"true","Show HP Text":"true","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_ItemCore","status":true,"description":"v1.29 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"12","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"false","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_TimedAttackCore","status":true,"description":"Adds a system which forces the user to time certain inputs to preform actions during battle.","parameters":{"Enable Touch?":"true","Default Source":"None","== Window Options ==":"","X Alignment":"Center","Y Alignment":"Top","X Offset":"0","Y Offset":"0","Window Width":"Graphics.width","Window Height":"this.fittingHeight(3)","== Default Props. ==":"","Sound Effect":"Sword2","Cursor Image":"","Background Image":"DefaultBackground","Window Opacity":"255","Target Location":"Graphics.width / 2","Repeat Type":"None","Speed":"10","Main Color":"#FFFFFF","Shape":"Rectangle","Width":"24","Outline Color":"#000000","Outline Size":"3","Direction":"Right","Flash Rate":"8"}},
{"name":"SRD_CameraCore","status":true,"description":"Allows developers to preform various camera motions including focusing and zooming.","parameters":{"Default Zoom":"1","Zoom Pictures?":"true","Margin Formula":"(Graphics.width / scale) - Graphics.width","Fix Black Lines":"false"}},
{"name":"SRD_SmoothCamera","status":true,"description":"Gives the camera of your game smoother motion during gameplay and specific camera motions.","parameters":{"Delay Power":"2","Cut Off Value":"0.02"}},
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"NCE_BasicModule","status":true,"description":"Base Plugin used for Neo Crystal Engine.","parameters":{"---Enemy Levels---":"","Default Enemy Level":"1","Show Enemy Levels":"false","---Stat Display---":"","Always Display MP":"false","Display TP in Menu":"true","Always Display TP":"false","Prioritize MP":"false","Display Max HP (Field)":"true","Display Max HP (Battle)":"false","Display Max MP (Field)":"true","Display Max MP (Battle)":"false","Display TP (Field)":"true","Display TP (Battle)":"true","---Custom Displays---":"","Alternate Menu Screen":"false","Custom Battle Display":"true"}},
{"name":"NCE_GuardianForces","status":true,"description":"Basic functions for Neo Crystal Engine Guardian Force plugins.","parameters":{}},
{"name":"NCE_X_GFSummon","status":true,"description":"Allows for the player to summon their GFs into battle.","parameters":{"Default Summon Style":"3"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.07 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Battle Results","Battle Drops Text":"Battle Spoils","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Show Skills Learned":"false","Gained EXP Text":"Gained EXP","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_X_AftermathLevelUp","status":true,"description":"v1.01 (Requires YEP_VictoryAftermath.js) Adds a level up\nportion to the Victory Aftermath sequences.","parameters":{"---General---":"","Level Up Title":"%1 has reached Level %2!","Enable Aftermath":"true","Font Size":"28","---Skill Learn---":"","Skill Text Singular":"Acquired Skill","Skill Text Plural":"Acquired Skills","Skill List Width":"200"}},
{"name":"YEP_X_InBattleStatus","status":true,"description":"v1.01 (Requires YEP_BattleEngineCore.js) Adds a 'Status'\noption in the Party Window in battle.","parameters":{"---General---":"","Command Text":"Status","Show Command":"true","Window X":"0","Window Y":"this.fittingHeight(2)","Window Width":"Graphics.boxWidth","Window Height":"Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(4)","---Status List---":"","Status Width":"Math.max(312, Graphics.boxWidth / 4);","State Help Front":"\\i[%1]%2","State Help End":"","Healthy Icon":"127","Healthy Text":"Healthy","Healthy Help":"User is currently unaffected by status effects.","---Buffs List---":"","MaxHP Buff Text":"MaxHP Up","MaxHP Buff Help":"Raises Maximum Health to %1%.","MaxMP Buff Text":"MaxMP Up","MaxMP Buff Help":"Raises Maximum Mana to %1%.","ATK Buff Text":"ATK Up","ATK Buff Help":"Raises Attack to %1%.","DEF Buff Text":"DEF Up","DEF Buff Help":"Raises Defense to %1%.","MAT Buff Text":"MAT Up","MAT Buff Help":"Raises Magic Attack to %1%.","MDF Buff Text":"MDF Up","MDF Buff Help":"Raises Magic Defense to %1%.","AGI Buff Text":"AGI Up","AGI Buff Help":"Raises Agility to %1%.","LUK Buff Text":"LUK Up","LUK Buff Help":"Raises Luck to %1%.","---Debuffs List---":"","MaxHP Debuff Text":"MaxHP Down","MaxHP Debuff Help":"Lowers Maximum Health to %1%.","MaxMP Debuff Text":"MaxMP Down","MaxMP Debuff Help":"Lowers Maximum Mana to %1%.","ATK Debuff Text":"ATK Down","ATK Debuff Help":"Lowers Attack to %1%.","DEF Debuff Text":"DEF Down","DEF Debuff Help":"Lowers Defense to %1%.","MAT Debuff Text":"MAT Down","MAT Debuff Help":"Lowers Magic Attack to %1%.","MDF Debuff Text":"MDF Down","MDF Debuff Help":"Lowers Magic Defense to %1%.","AGI Debuff Text":"AGI Down","AGI Debuff Help":"Lowers Agility to %1%.","LUK Debuff Text":"LUK Down","LUK Debuff Help":"Lowers Luck to %1%."}},
{"name":"YEP_X_ItemDisassemble","status":true,"description":"v1.05 (Requires YEP_ItemCore.js) Grants the option to\nbreak down items in the item menu into other items.","parameters":{"---General---":"","Disassemble Command":"Disassemble","Disassemble List":"Disassemble Items","Item Quantity 1":"×%1 %2","Item Quantity 2":"×%1-×%2 %3","Rate Font Size":"12","---Disassemble Sound---":"","Disassemble Sound":"Break","Disassemble Volume":"100","Disassemble Pitch":"150","Disassemble Pan":"0","---Result Sound---":"","Result Sound":"Item1","Result Volume":"100","Result Pitch":"100","Result Pan":"0","---Empty Sound---":"","Empty Sound":"Buzzer2","Empty Volume":"100","Empty Pitch":"100","Empty Pan":"0"}},
{"name":"YEP_ItemSynthesis","status":true,"description":"v1.10 Players can now craft their own items in-game\nthrough an item synthesis system.","parameters":{"---General---":"","Synthesis Command":"Craft","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Command Window---":"","Item Command":"Craft Item","Weapon Command":"Craft Weapon","Armor Command":"Craft Armor","Finish Command":"Finish","Text Alignment":"center","---Status Window---":"","Collected Recipes":"Collected Recipes","Crafted Items":"Crafted Items","Crafted Weapons":"Crafted Weapons","Crafted Armors":"Crafted Armors","---List Window---":"","Equipped Recipes":"true","Mask Unknown":"true","Mask Text":"?","Mask Italic":"true","Mask Help Text":"This item has not been synthesized yet.","Ingredients Text":"Ingredients","Amount Text":"Quantity","Amount Format":"false","Quantity Text Size":"12","---Sound---":"","Default SE":"Twine","Default Volume":"100","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_TurnOrderDisplay","status":true,"description":"v1.03 Displays the turn order for turn-based battle systems\nand allows for various display options.","parameters":{"---Default---":"","Show Turn Order":"true","---Settings---":"","Icon Size":"32","Position X":"right","Position Y":"54","Turn Direction":"left","Performed Spacing":"true","---Allies---":"","Ally Border Color":"4","Ally Back Color":"22","Ally Icon":"0","---Enemies---":"","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"24","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Load","Save Command":"Save","Delete Command":"Delete","---Help Window---":"","Select Help":"Please select a file slot.","Load Help":"Loads the data from the saved game.","Save Help":"Saves the current progress in your game.","Delete Help":"Deletes all data from this save file.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"This save is for a different game.","Empty Game Text":"Empty","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"playtime, save count, gold count, location","Data Column 2":"","Data Column 3":"","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Playtime:","Save Count":"Total Saves:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Do you wish to load this save file?","Save Confirmation":"true","Save Text":"Do you wish to overwrite this save file?","Delete Confirmation":"true","Delete Text":"Do you wish to delete this save file?","Confirm Yes":"Yes","Confirm No":"No"}},
{"name":"YEP_ShopMenuCore","status":true,"description":"v1.05 Revamps the shop menu appearance and provides the\nframework for many new shop options.","parameters":{"---General---":"","Command Order":"Buy Sell Equip Custom Cancel","Shop List Width":"Graphics.boxWidth / 2 + Graphics.boxWidth / 10","Command Alignment":"center","---Status Window---":"","Default Mode":"actor","Stat Switching":"true","Cannot Equip":"Can't Equip","Stat Font Size":"20","Cannot Equip Font Size":"20","---Info Window---":"","Show Icon":"true","Icon Size":"128","Font Size":"20","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"120","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"true","Show Value":"false","Show Max":"false"}},
{"name":"YEP_LifeSteal","status":true,"description":"v1.02 Enables passive life steal traits without them being\nactive abilities but instead as passive traits.","parameters":{"Enable HP Overheal":"false","Enable MP Overheal":"false","Negative HP LifeSteal":"false","Negative MP LifeSteal":"false"}}
];
