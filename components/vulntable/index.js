import React from 'react'
import { Router } from '../../routes';

import ReactTable from "react-table";
import { stylesheet } from 'react-table/react-table.css';

const VulnTable = ({ vulnData, severityOptions, navigateToUrl }) => (

    <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <ReactTable
            data={vulnData}
            filterable
            defaultFilterMethod={(filter, row) =>
                row[filter.id].toString().includes(filter.value)}
            getTdProps={(state, rowInfo, column, instance) => {
                return {
                    onClick: (e, handleOriginal) => {

                    const { row } = rowInfo;

                    navigateToUrl(row.url);
                    }
                }
                }}
            columns={[
                {
                    Header: "Vuln",
                    columns: [
                        {
                            Header: "Fix",
                            accessor: "fix"
                        },
                        {
                            Header: "Package",
                            accessor: "package"
                        },
                        {
                            Header: "Severity",
                            accessor: "severity",
                            filterMethod: (filter, row) => {
                                if (filter.value === "any") {
                                    return true;
                                }

                                return row.severity === filter.value;
                            },
                            Filter: ({ filter, onChange }) => {

                                const options = severityOptions.map(item=> (<option key={item} value={item}>{item}</option>))

                                return (<select
                                    onChange={event => onChange(event.target.value)}
                                    style={{ width: "100%" }}
                                    value={filter ? filter.value : "all"}
                                >
                                    {options}
                                </select>)

                            }

                        },
                        {
                            Header: "Url",
                            accessor: "url"
                        },
                        {
                            Header: "Vulnerability",
                            accessor: "vuln"
                        }
                    ]
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
        <br />
    </div>
);

export default VulnTable;