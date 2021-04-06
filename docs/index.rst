Digital Cave
===

## Estado del arte

[Why Engineers Often Struggle to License Their Ideas VIDEO](https://www.youtube.com/watch?v=obCESbsNDjg&t) [<img src="https://raw.githubusercontent.com/vazeri/vazeri.github.io/master/img/DigitalCave/DL.svg">](https://s3-us-west-2.amazonaws.com/cuevadigital/Why_Engineers_Often_Struggle_to_License_Their_Ideas-obCESbsNDjg.mp4) - Sthepen Key

Cueva Digital
===========================

Information, documents, advice y files I consider to be valuable to share on a daily basis, I'm sure more than one will find this information be useful, all the information has been backed up (mirror button) in the infrastructure of AWS S3 manually to prevent its loss over time the links contain

* Link to the source
* Mirror backup for Download
* Name of the original author
 
State of  the Art
-----------
Here are some external resources to help you learn more about MkDocs.

* `Why Engineers Often Struggle to License Their Ideas`_ - Sthepen Key
* `Markdown syntax guide`_
* `Writing your docs with MkDocs`_

.. _Why Engineers Often Struggle to License Their Ideas : https://www.youtube.com/watch?v=obCESbsNDjg&t
.. _Markdown syntax guide: http://daringfireball.net/projects/markdown/syntax
.. _Writing your docs with MkDocs: https://www.mkdocs.org/user-guide/writing-your-docs/

install and setup AWS CLI 


aws configure
 .aws/credentials file format


[default]
aws_access_key_id = XXXXXXXXXXXKK4DEDHMI
aws_secret_access_key = XXXXXXXXXX+pWsAjWvnP6FPjYB
region=us-east-1
output=table
Setting up autocomplete


complete -C '/usr/local/bin/aws_completer' aws
Set an account to work on 


export AWS_DEFAULT_PROFILE=prod_roadnet_general
Describe an Instance 


aws ec2 describe-instances --instance-ids i-06aa9dbc60b71133d
Upgrade instance AWS CLI commands


sudo nano /home/ubuntu/.aws
complete -C '/usr/local/bin/aws_completer' aws
aws configure list-profiles
aws configure
export AWS_DEFAULT_PROFILE=prod_roanet_general
aws ec2 register-image --name "MB02BackUp" --region=us-east-1 --description "MB02 BackUp AMI" --block-device-mappings DeviceName="/dev/sda",Ebs={SnapshotId="snap-0070070007"} --root-device-name "/dev/sda1"
Create an elastic VPC 


complete -C '/usr/local/bin/aws_completer' aws
export AWS_DEFAULT_PROFILE=dev_roadnet_general
aws ec2 allocate-address --domain "vpc" --region us-east-1
Attach the elastic IP to an instance


aws ec2 associate-address --allocation-id eipalloc-0cc63c654800fb700 --instance-id i-0d0fa557ba9001574 --no-allow-reassociation
Modify Instances size


export AWS_DEFAULT_PROFILE=prod_roadnet_general
aws ec2 describe-instances --instance-ids i-0dc29ab55bd2cb70e
aws ec2 stop-instances --instance-ids i-0dc29ab55bd2cb70e
aws ec2 describe-instances \
--instance-ids  i-0dc29ab55bd2cb70e \
--query "Reservations[*].Instances[*].{PublicIP:PublicIpAddress,Name:Tags[?Key=='Name']|[0].Value,Status:State.Name,InstanceID:InstanceId,Instancetype:InstanceType}"  \
--output table
aws ec2 modify-instance-attribute \
--instance-id i-0dc29ab55bd2cb70e \
--instance-type "{\"Value\": \"t2.small\"}"
aws ec2 start-instances --instance-ids i-0dc29ab55bd2cb70e
Take an AMI Backup


aws ec2 register-image --name "MB02BackUp" --region=us-east-1 --description "MB02 BackUp AMI" --block-device-mappings DeviceName="/dev/sda",Ebs={SnapshotId="snap-0070070007"} --root-device-name "/dev/sda1"
Enforce IMSDv2


aws ec2 modify-instance-metadata-options --instance-id i-049559d42f66b79ad --http-tokens required --http-endpoint enabled
aws ec2 reboot-instances --instance-ids i-049559d42f66b79ad
Create DNS Record using a JSON file


$ aws route53 change-resource-record-sets --hosted-zone-id ZXXXXXXXXXX --change-batch file://sample.json
Heres the Json file 


{
            "Comment": "CREATE a CNAME record for an Internal load balancer",
            "Changes": [{
            "Action": "CREATE",
                        "ResourceRecordSet": {
                                    "Name": "rdc-prod-int-mt-tools-lb.aws.roadnet.com",
                                    "Type": "CNAME",
                                    "TTL": 300,
                                 "ResourceRecords": [{ "Value": "internal-rdc-prod-int-mtools-lb-1498010731.us-east-1.elb.amazonaws.com"}]
}}]
}
 
