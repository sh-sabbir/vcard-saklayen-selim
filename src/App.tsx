import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Mail, Phone, MessageCircle, Download } from "lucide-react";

export default function App() {
	const supportedBrands = [
		"S.S International Travels & Tours (BD)",
		"S.S Holidays (BD)",
		"Travel Door Ltd (BD)",
		"Takeoff Travels (BD)",
		"Mynztrip (Malaysia)",
		"K Tours & Events (Thailand)",
	];

	const generateVCard = () => {
		const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:G. M. Saklayen Selim
N:Selim;G. M. Saklayen;;;
TITLE:Acting Sales Manager, Assistant Manager (Sales & Marketing)
ORG:Batik Air Malaysia (GSA – Bangladesh)
TEL;TYPE=CELL:+8801717460348
EMAIL;TYPE=WORK:gmsaki009@gmail.com
EMAIL;TYPE=WORK:gmsaklayen@hotmail.com
NOTE:Business Operations Advisor (Part-Time)\\nIATA & Non-IATA OTA Specialist\\n\\nSupporting Regional & Global Travel Brands:\\n• S.S International Travels & Tours (BD)\\n• S.S Holidays (BD)\\n• Travel Door Ltd (BD)\\n• Takeoff Travels (BD)\\n• Mynztrip (Malaysia)\\n• K Tours & Events (Thailand)
CATEGORIES:Aviation,Travel,Sales,Marketing
END:VCARD`;

		const blob = new Blob([vCardData], { type: "text/vcard" });
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "GM_Saklayen_Selim.vcf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	};

	return (
		<div className="dark min-h-screen bg-background p-4">
			<div className="max-w-lg mx-auto space-y-3">
				{/* Header Card */}
				<Card className="text-center">
					<CardHeader className="pt-5 pb-4">
						<CardTitle className="text-2xl">G. M. Saklayen Selim</CardTitle>
						<div className="space-y-0.5 text-muted-foreground text-sm">
							<p>Acting Sales Manager</p>
							<p>Assistant Manager (Sales & Marketing)</p>
							<Badge variant="outline" className="mt-1 text-xs">
								Batik Air Malaysia (GSA – Bangladesh)
							</Badge>
						</div>
					</CardHeader>
				</Card>

				{/* Roles Card */}
				<Card className="gap-2">
					<CardHeader className="pt-5">
						<CardTitle className="text-base">Professional Roles</CardTitle>
					</CardHeader>
					<CardContent className="space-y-1 pb-3">
						<div className="text-sm">
							<span>Business Operations Advisor</span>
							<span className="text-muted-foreground ml-1">(Part-Time)</span>
						</div>
						<div className="text-sm">
							<span>IATA & Non-IATA OTA Specialist</span>
						</div>
					</CardContent>
				</Card>

				{/* Supported Brands Card */}
				<Card className="gap-2">
					<CardHeader className="pt-5">
						<CardTitle className="text-base">Supporting Regional & Global Travel Brands</CardTitle>
					</CardHeader>
					<CardContent className="pb-3">
						<div className="text-sm text-muted-foreground leading-relaxed">
							{supportedBrands.join(" • ")}
						</div>
					</CardContent>
				</Card>

				{/* Contact Card */}
				<Card className="gap-2">
					<CardHeader className="pb-1">
						<CardTitle className="text-base">Contact</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2 pb-3">
						{/* Phone */}
						<div className="flex items-center space-x-2">
							<div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
								<Phone className="w-3 h-3 text-primary" />
							</div>
							<div className="flex-1">
								<a href="tel:+8801717460348" className="text-primary hover:underline text-sm">
									+88 01717460348
								</a>
								<p className="text-xs text-muted-foreground">Mobile / WhatsApp / WeChat</p>
							</div>
						</div>

						{/* WhatsApp */}
						<div className="flex items-center space-x-2">
							<div className="flex items-center justify-center w-8 h-8 bg-green-500/10 rounded-full">
								<MessageCircle className="w-3 h-3 text-green-600" />
							</div>
							<div className="flex-1">
								<a
									href="https://wa.me/8801717460348"
									className="text-green-600 hover:underline text-sm"
									target="_blank"
									rel="noopener noreferrer"
								>
									WhatsApp Message
								</a>
							</div>
						</div>

						{/* Emails */}
						<div className="flex items-start space-x-2">
							<div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
								<Mail className="w-3 h-3 text-primary" />
							</div>
							<div className="flex-1 space-y-0.5">
								<a
									href="mailto:gmsaki009@gmail.com"
									className="block text-primary hover:underline text-xs"
								>
									gmsaki009@gmail.com
								</a>
								<a
									href="mailto:gmsaklayen@hotmail.com"
									className="block text-primary hover:underline text-xs"
								>
									gmsaklayen@hotmail.com
								</a>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Footer */}
				<div className="sticky bottom-0 text-center text-xs text-muted-foreground py-1">
					<Button onClick={generateVCard} className="w-full h-10 text-sm" variant="default">
						<Download className="w-3 h-3 mr-2" />
						Save to Contacts
					</Button>
				</div>
			</div>
		</div>
	);
}
