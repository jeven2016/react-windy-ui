- 主流框架盒子模型的差异
  - Material UI
    - Small Button:
      ```json
        font-size: 0.8125rem * 16 =13 px
        line-height: 1.75 * 0.8125rem * 16 = 22.75px
        margin: 8px
        letter-spacing: 0.02857em * 0.8125rem * 16 = 0.37141px
        padding: 3px 9px(文字类型5px, outlined类型9px, 实体类型 10px)
        min-width: 64px
        border-radius: 4px
        font-weight: 500
      ```
    - Medium Button:
      ```json
        font-size: 0.875rem * 16 =14 px
        line-height: 1.75 * 0.875rem * 16 = 24.5px
        margin: 8px
        letter-spacing: 0.02857em * 14px = 0.399px
        padding: 文字类型6px 8px, outlined类型5px 15px, 实体类型 6px 16px
        min-width: 64px
        border-radius: 4px
        font-weight: 500
      ```
    - Large Button:
      ```json
        font-size: 0.9375rem * 16 =15 px
        line-height: 1.75 * 0.9375rem * 16 = 26.25px
        margin: 8px
        letter-spacing: 0.02857em * 15 px  = 0.43px
        padding: 文字类型8px 11px, outlined类型7px 21px, 实体类型 8px 22px
        min-width: 64px
        border-radius: 4px
        font-weight: 500
      ```
  - Bootstrap UI
    - Small Button:
      ```json
        font-size: 0.875 * 16 =14 px
        line-height: 1.5 * 14 = 21px
        margin: 0.25rem=4px   0.125rem=2px
        letter-spacing: 0.02857em * 0.8125rem * 16 = 0.37141px
        padding: 4px 8px
        min-width: 64px
        border-radius: 0.2rem * 16 = 3.2px
        font-weight: 400
      ```
    - Medium Button:
      ```json
        font-size: 1rem * 16 =16 px
        line-height: 1.75 * 0.875rem * 16 = 24.5px
        margin: 8px
        letter-spacing: 0.02857em * 14px = 0.399px
        padding: 文字类型6px 8px, outlined类型5px 15px, 实体类型 6px 16px
        min-width: 64px
        border-radius: 4px
        font-weight: 500
      ```
    - Large Button:
      ```json
        font-size: 1.25rem * 16 = 20 px
        line-height: 1.75 * 0.9375rem * 16 = 26.25px
        margin: 8px
        letter-spacing: 0.02857em * 15 px  = 0.43px
        padding: 文字类型8px 11px, outlined类型7px 21px, 实体类型 8px 22px
        min-width: 64px
        border-radius: 4px
        font-weight: 500
      ```
