         
         var cmMenuBar1 =
         {
            mainFolderLeft: '',
            mainFolderRight: '<div style="width:14px;height:28px" class="MenuBar1SpacerDiv" />',
            mainItemLeft: '',
            mainItemRight: '<div style="width:14px;height:28px" class="MenuBar1SpacerDiv" />',
            folderLeft: '',
            folderRight: '<div style="width:14px;height:22px" class="MenuBar1SpacerDiv" />',
            itemLeft: '',
            itemRight: '<div style="width:14px;height:22px" class="MenuBar1SpacerDiv" />',
            mainSpacing: 0,
            subSpacing: 0,
            delay: 100,
            offsetVMainAdjust: [0, 0],
            offsetSubAdjust: [0, 0]
         };
         var cmMenuBar1HSplit = [_cmNoClick, '<td class="MenuBar1MenuSplitLeft"><div></div></td>' +
                                                '<td class="MenuBar1MenuSplitText"><div></div></td>' +
                                                '<td class="MenuBar1MenuSplitRight"><div></div></td>'];
         var cmMenuBar1MainVSplit = [_cmNoClick, '<div><table width="19" cellspacing="0"><tr><td class="MenuBar1HorizontalSplit">|</td></tr></table></div>'];
         var cmMenuBar1MainHSplit = [_cmNoClick, '<td colspan="2" class="MenuBar1MainSplitText"><div></div></td><td class="MenuBar1MainSplitRight"><div></div></td>'];
         cmDrawFromText('MenuBar1', 'vbr', cmMenuBar1, 'MenuBar1');
         