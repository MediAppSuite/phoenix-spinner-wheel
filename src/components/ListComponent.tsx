import React from "react";
import { Card, Table } from "react-bootstrap";
import { Winner } from "../types/Winners";

type PropsType = {
  title: string;
  data: Winner[];
};

export default function ListComponent(props: PropsType) {
  const { data, title } = props;
  return (
    <div className="px-4 pb-4">
      <Card style={{ borderRadius: "20px" }} >
        <Card.Body>
          <Card.Title className="f-cl-orange">
            LIST OF <b>{title}</b>
          </Card.Title>

          <Table borderless className="mt-5">
            <tbody>
              {data.length > 0
                ? data.map((winner, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="f-cl-grey">{winner.name}</td>
                        <td className="f-cl-orange">{winner.price}</td>
                        <td className="f-cl-grey">{winner.time}</td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
