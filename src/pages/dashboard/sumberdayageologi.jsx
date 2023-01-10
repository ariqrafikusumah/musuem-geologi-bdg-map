import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Typography,
    Select,
    Option,
    Button,
    Textarea,
    Radio,
    Checkbox,
} from "@material-tailwind/react";


export function Sumberdayageologi() {
    return (
        <Card className="mb-12">
            <div className="">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="lg:w-1/3 w-full">
                    <Typography className="" variant="h3">
                        Sumber Daya Geologi
                    </Typography>
                </CardHeader>
                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Kategori BMN *
                        </Typography>
                        <Select className="w-full shadow-lg" label="Pilih Kategori BMN" required>
                            <Option>6.02.02.99.999</Option>
                            <Option>6.06.01.05.005</Option>
                            <Option>6.06.01.06.001</Option>
                        </Select>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            NUP BMN
                        </Typography>
                        <div className="w-full">
                            <Input
                                label="NUP BMN"
                            />
                        </div>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Tipe BMN
                        </Typography>
                        <Input
                            label=""
                            disabled
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            No Awal
                        </Typography>
                        <Input label="No Awal" />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Satuan
                        </Typography>
                        <Select className="shadow-lg" label="Pilih Satuan">
                            <Option>Buah</Option>
                            <Option>Unit</Option>
                            <Option>Set</Option>
                        </Select>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Kelompok Koleksi
                        </Typography>
                        <Input
                            label="Sumber Daya Geologi"
                            value="Sumber Daya Geologi"
                            disabled
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Jenis Koleksi *
                        </Typography>
                        <Select className="shadow-lg" label="Pilih Jenis Koleksi">
                            <Option>Pemanfaatan</Option>
                            <Option>Bencana</Option>
                            <Option>Tidak Terindentifikasi</Option>
                        </Select>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Sub Jenis Koleksi
                        </Typography>
                        <Input
                            className=""
                            label=""
                            disabled
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Kode Jenis Koleksi
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label=""
                            disabled
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Ruang Penyimpanan
                        </Typography>
                        <div className="grid grid-rows-1 grid-flow-col gap-4">
                            <Radio id="dalamnegeri" name="type" label="Storage" />
                            <Radio id="luarnegeri" name="type" label="Non Storage" />
                        </div>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Lokasi Penyimpanan :
                        </Typography>
                        <Select className="shadow-lg" label="Pilih Storage">
                            <Option>1</Option>
                            <Option>2</Option>
                            <Option>3</Option>
                            <Option>4</Option>
                            <Option>5</Option>
                            <Option>6</Option>
                            <Option>7</Option>
                            <Option>8</Option>
                            <Option>9</Option>
                            <Option>10</Option>
                            <Option>11</Option>
                            <Option>12</Option>
                            <Option>13</Option>
                            <Option>14</Option>
                            <Option>15</Option>
                        </Select>
                        <Select className="shadow-lg" label="Pilih Lantai">
                            <Option>1</Option>
                            <Option>2</Option>
                            <Option>3</Option>
                            <Option>4</Option>
                            <Option>5</Option>
                            <Option>6</Option>
                            <Option>7</Option>
                            <Option>8</Option>
                            <Option>9</Option>
                            <Option>10</Option>
                            <Option>11</Option>
                            <Option>12</Option>
                            <Option>13</Option>
                            <Option>14</Option>
                            <Option>15</Option>
                        </Select>
                        <Select className="shadow-lg" label="Pilih Lajur">
                            <Option>01</Option>
                            <Option>02</Option>
                            <Option>03</Option>
                            <Option>04</Option>
                            <Option>05</Option>
                            <Option>06</Option>
                            <Option>07</Option>
                            <Option>08</Option>
                            <Option>09</Option>
                            <Option>10</Option>
                            <Option>11</Option>
                            <Option>12</Option>
                            <Option>13</Option>
                            <Option>14</Option>
                            <Option>15</Option>
                        </Select>
                        <Select className="shadow-lg" label="Pilih Laci">
                            <Option>01</Option>
                            <Option>02</Option>
                            <Option>03</Option>
                            <Option>04</Option>
                            <Option>05</Option>
                            <Option>06</Option>
                            <Option>07</Option>
                            <Option>08</Option>
                            <Option>09</Option>
                            <Option>10</Option>
                            <Option>11</Option>
                            <Option>12</Option>
                            <Option>13</Option>
                            <Option>14</Option>
                            <Option>15</Option>
                        </Select>
                        <Input
                            className=""
                            label="Slot"
                        >
                        </Input>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Kondisi
                        </Typography>
                        <Select className="shadow-lg" label="Pilih Jenis Koleksi">
                            <Option>B - BAIK</Option>
                            <Option>RR - Rusak Ringan</Option>
                            <Option>RB - Rusak Berat</Option>
                        </Select>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Nama Koleksi
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="Nama Koleksi"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Deskripsi Koleksi
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="Deskripsi Koleksi"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Keterangan
                        </Typography>
                        <Textarea
                            className="grid justify-items-start"
                            label="Keterangan"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Umur Geologi
                        </Typography>
                        <Select className="shadow-lg" label="Pilih Umur Geologi">
                            <Option>Prakambrium</Option>
                            <Option>Paleozoikum - Kambrium</Option>
                            <Option>Paleozoikum - Ordovium</Option>
                            <Option>Paleozoikum - Silur</Option>
                            <Option>Paleozoikum - Devon</Option>
                            <Option>Paleozoikum - Karbon</Option>
                            <Option>Paleozoikum - Perem</Option>
                            <Option>Mesozoikum  - Trias</Option>
                            <Option>Mesozoikum  - Jura</Option>
                            <Option>Mesozoikum  - Kapur</Option>
                            <Option>Kenozoikum  - Paleogen</Option>
                            <Option>Kenozoikum  - Eosen</Option>
                            <Option>Kenozoikum  - Oligosen</Option>
                            <Option>Kenozoikum  - Miosen</Option>
                            <Option>Kenozoikum  - Pliosen</Option>
                            <Option>Kenozoikum  - Plistosen</Option>
                            <Option>Kenozoikum  - Holosen</Option>
                        </Select>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Nama Formasi
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="Nama Formasi"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Ditemukan :
                        </Typography>
                        <div className="grid grid-rows-1 grid-flow-col gap-4">
                            <Radio id="dalamnegeri" name="type" label="Dalam Negeri" />
                            <Radio id="luarnegeri" name="type" label="Luar Negeri" />
                            <Radio id="nn" name="type" label="NN" defaultChecked />
                        </div>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Pulau
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="Pulau"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Lokasi Temuan :
                        </Typography>
                        <Select className="shadow-lg" label="Pilih Provinsi">
                            <Option>Jawa Barat</Option>
                            <Option>Jawa Tengah</Option>
                            <Option>Jawa Timur</Option>
                        </Select>
                        <Select className="shadow-lg" label="Pilih Kabupaten/Kota">
                            <Option>Bandung</Option>
                            <Option>Bekasi</Option>
                            <Option>Jakarta</Option>
                        </Select>
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Alamat Lengkap :
                        </Typography>
                        <Textarea
                            className="grid justify-items-start"
                            label="Alamat"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                        <Typography
                            className="justify-start w-max md:md-inset-0"
                            variant="h6"
                        >
                            Kordinat :
                        </Typography>
                        <div>
                            <Typography>
                                Latitude
                            </Typography>
                            <Input
                                className="shadow-lg"
                                label="Latitude"
                            >
                            </Input>
                        </div>
                        <div>
                            <Typography>
                                Longitude
                            </Typography>
                            <Input
                                className="shadow-lg"
                                label="Longitude"
                            >
                            </Input>
                        </div>
                        <div>
                            <Typography>
                                Elevasi
                            </Typography>
                            <Input
                                className="shadow-lg"
                                label="Elevasi"
                            >
                            </Input>
                        </div>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="grid grid-flow-row auto-rows-max gap-4 md:auto-rows-min">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Peta
                        </Typography>
                        <div className="grid grid-rows-2 grid-flow-col gap-4">
                            <Checkbox id="1" label="Rupa Bumi" />
                            <Checkbox id="2" label="Geologi" />
                            <Checkbox id="3" label="Blad" />
                            <Checkbox id="4" label="Luar Negeri" />
                        </div>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Skala
                        </Typography>
                        <Select className="w-full shadow-lg" label="Pilh Skala Peta">
                            <Option>1:50.000</Option>
                            <Option>1:100.000</Option>
                            <Option>1:250.000</Option>
                        </Select>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Lembar Peta
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="Lembar Peta"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Cara Perolehan
                        </Typography>
                        <Select className="shadow-lg" label="Pilih Cara Perolehan">
                            <Option>Pembuatan</Option>
                            <Option>Pembelian</Option>
                            <Option>Hibah</Option>
                            <Option>Penyelidikan Geologi</Option>
                        </Select>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Tahun Perolehan
                        </Typography>
                        <Input
                            className=""
                            label="Tahun Perolehan"
                        >
                        </Input>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Determinator
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="Determinator"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Kolektor
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="Kolektor"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Kepemilikan Awal
                        </Typography>
                        <Select className="shadow-lg" label="Pilih Kepemilikan Awal">
                            <Option>Musuem Geologi Bandung</Option>
                            <Option>Dienst van den Mijnbouw</Option>
                            <Option>-</Option>
                        </Select>
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Publikasi
                        </Typography>
                        <Textarea
                            className="grid justify-items-start"
                            label="Publikasi"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            URL
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="URL"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Nilai Perolehan
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="Nilai Perolehan"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Nilai Buku
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            label="Nilai Buku"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Gambar 1
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            type="file"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Gambar 2
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            type="file"
                        />
                    </div>
                </CardBody>

                <CardBody>
                    <div className="flex justify-start">
                        <Typography
                            className="justify-start w-60 md:md-inset-0"
                            variant="h6"
                        >
                            Gambar 3
                        </Typography>
                        <Input
                            className="grid justify-items-start"
                            type="file"
                        />
                    </div>
                </CardBody>


                <CardBody>
                    <div className="flex w-max gap-4">
                        <Button
                            variant="outlined" color="red">
                            Reset
                        </Button>
                        <Button>
                            SImpan
                        </Button>
                    </div>
                </CardBody>

            </div>
        </Card>
    );
}

export default Sumberdayageologi;