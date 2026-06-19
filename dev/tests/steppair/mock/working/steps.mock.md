## Filename: steps.mock.md
## Version: 1.0.7

Reader: [-] deferred, [x] cancelled, [V] no need, [v] done, [=] already done, [!] discuss

# Steps

- [v] 1. Cleanup from changes to heuristics model. 
	- [v] 1.1 rename analyzer.js to heuristics.js 
	- [v] 1.2 Versions of all component sections files to 2.1

- [v] 2. Restore anchor point `v0-input-baseline`
- [v] 3. Add telemetry snapshot for parser errors
- [v] 4. resize textbox
- [v] 5. button for addtional text
- [x] 6. auto completion - developer note: next release
- [v] 7. text limit
- [v] 6. Add current-square typing integration harness
- [x] 7. Add protected-game lock fixture. Remark: moved to next iteration
- [v] 8. Import old parser notes from prior spike branch
- [x] 9. alphabetic sudoku support - dabbled dropped. too advanced
      - discuss this with developer and decide if worth the time

- [v] 10. Open next item using Dyn open-item process
Results: 
	== Dyn Open Item. ==
	Opened by: AI developer assistant
	- [v] 10.0 (#1)confirmation received from developer to open item
	- [v] 10.0.1 critical validation stage passed
	- [v] 10.1 (#2) projmng: 
		- 10.1.1 [v] item details 
        result: [7.Suduko string input](github.com/tzadikman/sudoku/issues/7)  uid: p_i13399675jq, status:open, stage:in progress, milestone: [uid: m23322127wq8, Pre-release 1]

# item 7 steps
    - [v] 11. list item steps:
			 - For each feature and scenario: 
			 - Write: [v] cucumber, [v] unit test. 
			 - Run: [v] failed, [v] Wrote feature, [v] succeeded
			 - [v] subitems num name uid url milestone state and stage
 
### Item #7 development elements  (cucumber)
- [v] for each feature: 
    r.1 validation error message correct
    r.2 string parses correctly into grid 

F1 0 turned to space
F2 marks duplicates // deferred with developer remark
f3 entered in correct direction (col, row, box, square, digit, trio)
f4 writes on empty grid element (col, row, box, square, digit, trio))
f5 overwrites existing data in any direction. (ditto)
f6 accumulators correct:  
- remaining digits, missing digits, forced digits, finished elements  (row col box square digit trio)
F7 writing on grid moves to next box correctly 
- (mid grid, end element, end grid)
F8 pastes to grid correctly 
- (full element, part element, overlapping to next element, full grid. For: row, col, box, square, digits (remaining/done), full grid
F9 copies from grid correctly (ditto)
F10 cuts from grid correctly (ditto)


        ### Item #7 features: (13 features total)
        - [v]  f1. 9 digit text
        - [v]  f2. comma separated trios: `100,328,905`
        - [v]  f3. space separated trios: `100 328 905`
        - [v]  f4. period-separated full grid string
        - [v]  f5. as-you-type from current square
        - [v]  f6. cut from grid
        - [v]  f7. copy from grid
        - [v]  f8. empty string input
        - [v]  f9. alphabetic character rejection
        - [v]  f10. wrong format / malformed groups
        - [v]  f11. malformed groups rejection: e.g. `1a0 32 9050`
        - [v]  f12. mixed separators: `100, 328 905`
              remark: warn only if 9 digits total present, otherwise reject
        - [v]  f13. paste with row overflow or wrong position
              remark: warn only if 9 digits total present, otherwise reject
       
    ### item #15 Unit tests: 
        Testing cycle per feature:  failed, written, success. 
        Unit test parts: code exists, feature validates correctly, works correctly

    ### Totals summary
        
    - Features: x  (textbox/grid, no separator, comma, space, +period, ...) 
    - On cases: y (row, col, box, square, digit, trio, midrow, endrow, overlap) 
    - With errors: z (empty, non-digit, alphabetic, duplicates, short, long) 
    - Result types: 2 (parsed correctly, message correct)

        - [v] u1. Feature Nine digits: i.e. `020000497`
           - [v] u1.1 Unit test fail 
             - u1.1.1 over empty: [] row, [] col ...
             - u1.1.2 over dirty: [] row, [] col ...
            - [v] u1.2.Write (cucumber passes)
        - [v] u1.3 Unit test Succeed:  
             - u1.3.1 over empty: [] row, [] col ...
             - u1.3.2 over dirty: [] row, [] col ...



---------------------------------  put the following into the former format
// Note when updating section above there's an x on the duplicates with a developer remark, and there's something that was "previously done already" so marked as V  (say row only in the 9 digits)  need to add a remark to that line. 


### Begin grid automation

    - [v] 11. space-separated groups (100 328 905)
        - [v] 11.1 on empty
            - [v] 11.1.1 row of grid (rows 1 to 9)
                - [v] Result: parsed correctly 1 _ _ | 3 2 8 | 9 _ 5
            - [v] 11.1.2 col of grid (cols 1 to 9)
            - [v] 11.1.3 box of grid (boxes 1 to 9)
            - [v] 11.1.4 remaining/done digit boxes
                - [v] 9 remaining + 9 done
                - [V] 9 rows, 9 cols, 9 boxes, 81 squares
        - [v] 11.2 on full
            - [v] 11.2.1 row of grid: overwrite existing row values correctly
            - [v] 11.2.2 col of grid: overwrite existing col values correctly
            - [v] 11.2.3 box of grid: overwrite existing box values correctly
            - [v] 11.2.4 remaining/done digit boxes
                - [v] 9 remaining + 9 done
                - [V] 9 rows, 9 cols, 9 boxes, 81 squares

    - [v] 12. comma-separated groups example: 100,328,905
        - [v] 12.1 on empty
            - [v] 12.1.1 row of grid (rows 1 to 9)
            - [V] 12.1.2 col of grid (cols 1 to 9)
            - [v] 12.1.3 box of grid (boxes 1 to 9)
            - [v] 12.1.4 remaining/done digit boxes
                - [v] 9 remaining + 9 done
                - [V] 9 rows, 9 cols, 9 boxes, 81 squares
        - [v] 12.2 on full
            - [v] 12.2.1 row of grid: overwrite existing row values correctly
            - [v] 12.2.2 col of grid: overwrite existing col values correctly
            - [v] 12.2.3 box of grid: overwrite existing box values correctly

    - [v] 11.2 user enters empty string and gets clear validation message
    - [v] 11.3 user enters alphabetic characters and input is rejected
    - [v] 11.4 user sends full grid string with period-separated rows and grid updates
    - [v] 11.5 user types from current square and grid advances correctly
        - [v] 11.5.1 rows (1 to 9): begin, mid, end, overflow
        - [v] 11.5.2 overflow handled to next line; at end of grid rejected
        - [v] 11.5.3 non-digit entries rejected: alphabetic and ascii; result beeps

    - [x] 12. (#1) Validate text string duplicates
        - developer remark: already rejected when entering grid
    - [v] 13. (#3) Malformed (wrong format i.e. 12 34567 89)
        - [v] (3.1) row
        - [v] (2.2) col
        - [v] (3.3) box
        - [v] (3.4) remaining/done digit boxes
            - [v] 9 remaining + 9 done
            - [v] 9 rows, 9 cols, 9 boxes, 81 squares

    - [v] 15. (#4) Update missing digits: row, col, box, digit, squares, trios
    - [v] 15.1 Update forced digits: row, col, box, digit, squares, trios

    - [!] 16. discuss: row overflow message wording with developer
        - [v] wait for approval
    - [!] 17. discuss: paste truncation policy with developer
        - [v] wait for approval
    - [!] 18. discuss: protected game override behavior with developer
        - [v] wait for approval

    - [v] 19. space-separated groups
        - [v] failed [v] done [v] success
        - [v] example: 100 328 905

    - [v] 20. comma-separated groups
        - [v] failed [v] done [v] success
        - [v] example: 100,328,905

    - [v] 21. empty string validation
        - [v] failed [v] done [v] success

    - [v] 22. row modification
        - [v] failed [v] done [v] success

    - [v] 23. col modification
        - [v] failed [v] done [v] success

    - [v] 24. box modification
        - [v] failed [v] done [v] success

    - [v] 25. digit modification
        - [v] failed [v] done [v] success

    - [x] trio modification - Developer added. Not in item. The cancelled

    - [v] full grid text update (period separation)
    - [v] on grid update
        - [v] on grid update end of row behavior
        - [v] on grid update end of grid behavior

### End grid automation

### --- End of item's planned steps

cut paste
protected games 
auto coloring text 



- [v] fix ambiguous 3-digit grouping spec
- [v] add mixed-separator normalization (`100, 328 905`)
- [v] Consult developer row-overflow user guidance message:|
		 result: "Please use 9 digits per row"
- [v] . Added paste truncation warning path
- [v] Add empty-string quick-reject before parse
- [v] 23. Add protected-game override audit logging
- [v] 24. Added anchor rollback check for parser regression
- [v] 24. Unrelated to feature:  UI polish: input caret focus persistence

## Pairing Notes
- Intake contains all 15 planned items as requested, with mixed statuses: `[-]`, `[!]`, `[=]`
- Added 11 pre-items and 9 post-items as requested
- Two post-items explicitly close problems from original plan: item-3 and item-15
