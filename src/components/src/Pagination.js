import React from 'react';
import Button from "./button";
import {IconArrowLeft, IconArrowRight} from "./Icons";
import Select from "./select";

const Pagination = React.forwardRef((props, ref) => {

  return <>
    <div className="pagination">
      <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
            <IconArrowLeft/>
        </Button>
      </span>

      <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
            1
        </Button>
      </span>

      <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
            2
        </Button>
      </span>

      <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
            3
        </Button>
      </span>

      <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
            4
        </Button>
      </span>

      <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
            5
        </Button>
      </span>

      <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
            •••
        </Button>
      </span>

      <span className="item">
        <Button outline initOutlineColor hasOutlineBackground={false}
                type="primary">
            <IconArrowRight/>
        </Button>
      </span>

      <Select defaultValue="10"
              onSelect={(value) => console.log(value)}>
        <Select.Option value="10">
          10条/页
        </Select.Option>
        <Select.Option value="20">
          20条/页
        </Select.Option>
        <Select.Option value="50">
          50条/页
        </Select.Option>
        <Select.Option value="100">
          100条/页
        </Select.Option>
      </Select>
    </div>
  </>;

});

export default Pagination;